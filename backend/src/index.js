import express from 'express';
import cors from 'cors';
import { initDB } from './utils/db.js';
import salesRouter from './routes/sales.routes.js';

const app = express();

// Configure CORS for production
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  process.env.FRONTEND_URL,
  // Add your Render frontend URL here after deployment
].filter(Boolean);

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

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

  app.get('/api/test-phone', (req, res) => {
    const phone = req.query.phone || '9100671247';
    const exact = db.prepare('SELECT * FROM sales WHERE phone_number = ? LIMIT 5').all(phone);
    const like = db.prepare('SELECT * FROM sales WHERE phone_number LIKE ? LIMIT 5').all(`%${phone}%`);
    const sample = db.prepare('SELECT phone_number FROM sales LIMIT 10').all();
    
    res.json({ 
      searchTerm: phone,
      exactMatch: exact,
      likeMatch: like,
      samplePhones: sample 
    });
  });

  app.use((req, _res, next) => { 
    req.ctx = { db }; 
    next(); 
  });

  app.use('/api/sales', salesRouter);

  const PORT = process.env.PORT || 5001;
  const HOST = '0.0.0.0'; // Important for Render
  
  app.listen(PORT, HOST, () => {
    console.log(`🚀 Backend listening on ${HOST}:${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
