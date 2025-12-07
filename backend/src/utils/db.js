import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const DB_PATH = path.join(process.cwd(), 'sales.db');
const CSV_PATH = path.join(process.cwd(), 'src', 'data', 'data.csv');

// Helper to parse CSV line (handles quoted fields)
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

// Convert CSV header to valid SQL column name
function sanitizeColumnName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')           // Replace spaces with underscores
    .replace(/[^a-z0-9_]/g, '')     // Remove invalid characters
    .replace(/^(\d)/, '_$1');       // Prefix if starts with number
}

export function initDB() {
  const db = new Database(DB_PATH);
  
  // Check if data already loaded
  const tableExists = db.prepare(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='sales'"
  ).get();
  
  if (tableExists) {
    const count = db.prepare('SELECT COUNT(*) as count FROM sales').get();
    console.log(`✅ Database ready with ${count.count} records`);
    return Promise.resolve(db);
  }

  if (!fs.existsSync(CSV_PATH)) {
    console.warn(`⚠️  CSV file not found at ${CSV_PATH}`);
    return Promise.resolve(db);
  }

  console.log('📂 Loading CSV data into database (streaming)...');
  
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(CSV_PATH);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    let headers = null;
    let dbColumns = null;
    let lineCount = 0;
    let insertedCount = 0;
    const batchSize = 1000;
    let batch = [];
    let insertStatement = null;
    let insertBatch = null;

    rl.on('line', (line) => {
      lineCount++;
      
      if (lineCount === 1) {
        // First line is headers
        headers = parseCSVLine(line);
        dbColumns = headers.map(sanitizeColumnName);
        
        console.log(`  Found ${headers.length} columns`);
        console.log(`  Creating table with columns:`, dbColumns.join(', '));
        
        // Create table dynamically based on CSV headers
        const columnDefs = dbColumns.map(col => {
          if (col.includes('age') || col.includes('quantity')) {
            return `${col} INTEGER`;
          } else if (col.includes('price') || col.includes('amount') || col.includes('percentage')) {
            return `${col} REAL`;
          } else {
            return `${col} TEXT`;
          }
        }).join(', ');
        
        db.exec(`
          CREATE TABLE sales (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ${columnDefs}
          );
          
          CREATE INDEX idx_customer_name ON sales(customer_name);
          CREATE INDEX idx_phone_number ON sales(phone_number);
          CREATE INDEX idx_customer_region ON sales(customer_region);
          CREATE INDEX idx_product_category ON sales(product_category);
          CREATE INDEX idx_date ON sales(date);
        `);
        
        // Create dynamic insert statement
        const placeholders = dbColumns.map(() => '?').join(', ');
        insertStatement = db.prepare(`
          INSERT INTO sales (${dbColumns.join(', ')}) 
          VALUES (${placeholders})
        `);
        
        insertBatch = db.transaction((records) => {
          for (const record of records) {
            try {
              insertStatement.run(...record);
            } catch (err) {
              console.error('Insert error:', err.message);
            }
          }
        });
        
        return;
      }

      if (!line.trim()) return; // Skip empty lines

      try {
        const values = parseCSVLine(line);
        
        // Skip if row doesn't have enough data
        if (values.length < headers.length / 2) return;

        // Pad values to match headers length
        while (values.length < headers.length) {
          values.push(null);
        }

        // Clean and format values
        const cleanValues = values.slice(0, headers.length).map((val, idx) => {
          if (!val || val === '') return null;
          
          // Remove quotes
          val = val.replace(/^["']|["']$/g, '').trim();
          
          // Handle numeric fields based on column name
          const colName = dbColumns[idx];
          
          if (colName.includes('age') || colName.includes('quantity')) {
            const num = parseInt(val);
            return isNaN(num) ? null : num;
          }
          
          if (colName.includes('price') || colName.includes('amount') || colName.includes('percentage')) {
            const num = parseFloat(val);
            return isNaN(num) ? null : num;
          }
          
          // Clean phone numbers
          if (colName === 'phone_number') {
            return val.replace(/[\s\-\(\)\"\']/g, '');
          }
          
          return val;
        });

        batch.push(cleanValues);

        // Insert in batches for performance
        if (batch.length >= batchSize) {
          insertBatch(batch);
          insertedCount += batch.length;
          console.log(`  Inserted ${insertedCount} records...`);
          batch = [];
        }
      } catch (err) {
        console.error(`  Error on line ${lineCount}:`, err.message);
      }
    });

    rl.on('close', () => {
      // Insert remaining records
      if (batch.length > 0 && insertBatch) {
        insertBatch(batch);
        insertedCount += batch.length;
      }
      
      console.log(`✅ Loaded ${insertedCount} records into database`);
      resolve(db);
    });

    rl.on('error', (err) => {
      console.error('❌ Failed to read CSV:', err.message);
      reject(err);
    });
  });
}