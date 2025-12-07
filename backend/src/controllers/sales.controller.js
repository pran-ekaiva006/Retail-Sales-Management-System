import { parseQuery } from '../utils/query-validators.js';
import { querySales } from '../services/sales.service.js';

export function getSalesHandler(req, res) {
  try {
    console.log('Received query params:', req.query);
    const filters = parseQuery(req.query);
    console.log('Parsed filters:', filters);
    
    const result = querySales(req.ctx.db, filters);
    res.json(result);
  } catch (error) {
    console.error('Sales query error:', error);
    res.status(400).json({ error: error.message });
  }
}
