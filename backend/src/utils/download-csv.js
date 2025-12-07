import fs from 'fs';
import { CSV_PATH } from './paths.js';

export async function ensureCSVExists() {
  if (fs.existsSync(CSV_PATH)) {
    console.log('✅ CSV file found');
    return true;
  }
  
  console.warn('⚠️  No CSV file found. Please ensure data-sample.csv exists in backend/src/data/');
  return false;
}
