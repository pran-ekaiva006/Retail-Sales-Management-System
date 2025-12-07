import express from 'express';
import cors from 'cors';
import { initDB } from './utils/db.js';
import salesRouter from './routes/sales.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize database (async)
let db = null;

initDB().then(database => {
  db = database;
  
  app.get('/api/health', (req, res) => {
    if (!db) {
      return res.status(503).json({ status: 'loading' });
    }
    const count = db.prepare('SELECT COUNT(*) as count FROM sales').get();
    res.json({ status: 'ok', count: count.count });
  });

  // Test endpoint to check phone numbers
  app.get('/api/test-phone', (req, res) => {
    const phone = req.query.phone || '9100671247';
    const exact = db.prepare('SELECT * FROM sales WHERE phone = ? LIMIT 5').all(phone);
    const like = db.prepare('SELECT * FROM sales WHERE phone LIKE ? LIMIT 5').all(`%${phone}%`);
    const sample = db.prepare('SELECT phone FROM sales LIMIT 10').all();
    
    res.json({ 
      searchTerm: phone,
      exactMatch: exact,
      likeMatch: like,
      samplePhones: sample 
    });
  });

  // Pass db to routes
  app.use((req, _res, next) => { 
    req.ctx = { db }; 
    next(); 
  });

  app.use('/api/sales', salesRouter);

  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`🚀 Backend listening on :${PORT}`));
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
