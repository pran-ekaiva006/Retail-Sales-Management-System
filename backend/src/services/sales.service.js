import { transformSalesRow } from '../utils/transform.js';

export function querySales(db, filters) {
  let sql = 'SELECT * FROM sales WHERE 1=1';
  const params = [];

  // Search filter - Customer Name and Phone Number
  if (filters.search) {
    sql += " AND (LOWER(customer_name) LIKE LOWER(?) OR REPLACE(phone_number, ' ', '') LIKE ?)";
    const searchTerm = `%${filters.search}%`;
    const phoneSearch = `%${filters.search.replace(/[\s\-\(\)]/g, '')}%`;
    params.push(searchTerm, phoneSearch);
  }

  // Region filter
  if (filters.regions && Array.isArray(filters.regions) && filters.regions.length > 0) {
    const placeholders = filters.regions.map(() => '?').join(',');
    sql += ` AND customer_region IN (${placeholders})`;
    params.push(...filters.regions);
  }

  // Gender filter
  if (filters.gender && Array.isArray(filters.gender) && filters.gender.length > 0) {
    const placeholders = filters.gender.map(() => '?').join(',');
    sql += ` AND gender IN (${placeholders})`;
    params.push(...filters.gender);
  }

  // Age range
  if (filters.ageMin !== undefined && filters.ageMin !== null) {
    sql += ' AND age >= ?';
    params.push(filters.ageMin);
  }
  if (filters.ageMax !== undefined && filters.ageMax !== null) {
    sql += ' AND age <= ?';
    params.push(filters.ageMax);
  }

  // Category filter
  if (filters.categories && Array.isArray(filters.categories) && filters.categories.length > 0) {
    const placeholders = filters.categories.map(() => '?').join(',');
    sql += ` AND product_category IN (${placeholders})`;
    params.push(...filters.categories);
  }

  // Tags filter
  if (filters.tags && Array.isArray(filters.tags) && filters.tags.length > 0) {
    const tagConditions = filters.tags.map(() => 'tags LIKE ?').join(' OR ');
    sql += ` AND (${tagConditions})`;
    params.push(...filters.tags.map(tag => `%${tag}%`));
  }

  // Payment method filter
  if (filters.paymentMethods && Array.isArray(filters.paymentMethods) && filters.paymentMethods.length > 0) {
    const placeholders = filters.paymentMethods.map(() => '?').join(',');
    sql += ` AND payment_method IN (${placeholders})`;
    params.push(...filters.paymentMethods);
  }

  // Date range
  if (filters.startDate) {
    sql += ' AND date >= ?';
    params.push(filters.startDate);
  }
  if (filters.endDate) {
    sql += ' AND date <= ?';
    params.push(filters.endDate);
  }

  // Sorting
  const sortMap = {
    'date_desc': 'date DESC',
    'quantity': 'quantity DESC',
    'name_asc': 'customer_name ASC'
  };
  const sortClause = sortMap[filters.sort] || 'date DESC';
  sql += ` ORDER BY ${sortClause}`;

  // Count total
  const countSql = sql.replace('SELECT *', 'SELECT COUNT(*) as count');
  let total = 0;
  
  try {
    const totalResult = db.prepare(countSql).get(...params);
    total = totalResult ? totalResult.count : 0;
  } catch (error) {
    console.error('Count query error:', error.message);
    throw error;
  }

  // Pagination - 10 items per page
  const limit = 10;
  const page = filters.page || 1;
  const offset = (page - 1) * limit;
  sql += ' LIMIT ? OFFSET ?';
  params.push(limit, offset);

  console.log('Final SQL:', sql);
  console.log('Final params:', params);

  // Execute query
  let rows = [];
  try {
    rows = db.prepare(sql).all(...params);
  } catch (error) {
    console.error('Query error:', error.message);
    throw error;
  }

  const items = rows.map(row => ({
    transactionId: row.id || '',
    date: row.date || '',
    customerId: row.customer_id || '',
    customerName: row.customer_name || '',
    phone: row.phone_number || '',
    gender: row.gender || '',
    age: row.age || 0,
    region: row.customer_region || '',
    category: row.product_category || '',
    quantity: row.quantity || 0,
    finalAmount: parseFloat(row.final_amount) || 0
  }));

  const totalPages = Math.ceil(total / limit);

  return {
    items,
    page,
    totalPages: totalPages > 0 ? totalPages : 1,
    total
  };
}
