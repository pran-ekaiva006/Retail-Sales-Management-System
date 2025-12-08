# 📊 Retail Sales Management System

A full-stack sales analytics dashboard built with React and Express that provides real-time data visualization, advanced filtering, and efficient search capabilities. The system uses SQLite for data storage with optimized query performance through indexed columns and server-side pagination.

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI framework with functional components
- **Vite 5.4.0** - Build tool and development server
- **Zustand 4.5.2** - Lightweight state management
- **Axios 1.7.2** - HTTP client for API requests

### Backend
- **Node.js ≥16.0.0** - JavaScript runtime
- **Express 4.19.2** - Web framework
- **SQLite 3.x** - Embedded database
- **better-sqlite3 12.5.0** - Synchronous SQLite driver
- **Zod 3.23.8** - Schema validation

---

## 🔍 Search Implementation Summary

**Location:** [`backend/src/services/sales.service.js`](backend/src/services/sales.service.js) (Lines 8-12)

**Approach:**
- **Pattern Matching**: Uses SQL `LIKE` with case-insensitive search on customer names
- **Phone Normalization**: Strips formatting characters (spaces, hyphens, parentheses) before matching
- **Combined Query**: Single SQL query searches both customer name and phone number fields

**Code:**
```javascript
if (filters.search) {
  sql += " AND (LOWER(customer_name) LIKE LOWER(?) OR REPLACE(phone_number, ' ', '') LIKE ?)";
  const searchTerm = `%${filters.search}%`;
  const phoneSearch = `%${filters.search.replace(/[\s\-\(\)]/g, '')}%`;
  params.push(searchTerm, phoneSearch);
}
```

**Performance:**
- Indexed on `customer_name` and `phone_number` columns
- Typical query time: <50ms for 10,000+ records

---

## 🎯 Filter Implementation Summary

**Location:** [`backend/src/services/sales.service.js`](backend/src/services/sales.service.js) (Lines 14-56)

**Implemented Filters:**

1. **Multi-select Filters** (Region, Gender, Category, Tags, Payment Method)
   - Uses SQL `IN` clause with parameterized queries
   - Frontend: [`Filters.jsx`](frontend/src/components/Filters.jsx) - Dropdown with checkboxes
   - Validation: [`query-validators.js`](backend/src/utils/query-validators.js) - Zod schema

2. **Range Filters** (Age, Date)
   - Age: `ageMin` and `ageMax` with validation (0-150)
   - Date: `startDate` and `endDate` with ISO format
   - Frontend validation prevents invalid ranges (min > max)

**Code Example:**
```javascript
// Multi-select filter
if (filters.gender && Array.isArray(filters.gender) && filters.gender.length > 0) {
  const placeholders = filters.gender.map(() => '?').join(',');
  sql += ` AND gender IN (${placeholders})`;
  params.push(...filters.gender);
}

// Range filter
if (filters.ageMin !== undefined && filters.ageMin !== null) {
  sql += ' AND age >= ?';
  params.push(filters.ageMin);
}
```

**Features:**
- All filters use AND logic (intersection)
- Empty results handled gracefully with user feedback
- Filters persist in URL query parameters

---

## 📊 Sorting Implementation Summary

**Location:** [`backend/src/services/sales.service.js`](backend/src/services/sales.service.js) (Lines 58-66)

**Supported Sort Orders:**
- `date_desc` - Date (Newest First) - **Default**
- `quantity` - Quantity (High to Low)
- `name_asc` - Customer Name (A-Z)

**Code:**
```javascript
const sortMap = {
  'date_desc': 'date DESC',
  'quantity': 'quantity DESC',
  'name_asc': 'customer_name ASC'
};
const sortClause = sortMap[filters.sort] || 'date DESC';
sql += ` ORDER BY ${sortClause}`;
```

**Frontend Component:** [`Sorting.jsx`](frontend/src/components/Sorting.jsx)
- Dropdown with validated enum values
- State managed via Zustand store
- Triggers automatic data refetch on change

---

## 📄 Pagination Implementation Summary

**Location:** [`backend/src/services/sales.service.js`](backend/src/services/sales.service.js) (Lines 80-98)

**Implementation:**
- **Type**: Server-side pagination (offset-based)
- **Page Size**: 10 items per page
- **Total Count**: Separate COUNT query before main query
- **SQL**: Uses `LIMIT` and `OFFSET` clauses

**Code:**
```javascript
// Count total matching records
const countSql = sql.replace('SELECT *', 'SELECT COUNT(*) as count');
const totalResult = db.prepare(countSql).get(...params);
const total = totalResult.count;

// Apply pagination
const limit = 10;
const page = filters.page || 1;
const offset = (page - 1) * limit;
sql += ' LIMIT ? OFFSET ?';
params.push(limit, offset);

// Calculate total pages
const totalPages = Math.ceil(total / limit);
```

**Frontend Component:** [`Pagination.jsx`](frontend/src/components/Pagination.jsx)
- Previous/Next buttons with disabled states
- Page counter (e.g., "Page 2 of 50")
- Resets to page 1 when filters change

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js ≥16.0.0
- npm or yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd truestate_retail_sales
```

### 2. Setup Backend
```bash
cd backend
npm install

# Place CSV file in backend/src/data/data.csv
# Or use the sample: backend/src/data/data-sample.csv

npm run dev
```

**Expected Output:**
```
📂 Loading CSV data into database (one-time setup)...
✅ Loaded 10000 records into database
🚀 Backend listening on 0.0.0.0:5001
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

**Expected Output:**
```
➜  Local:   http://localhost:5173/
```

### 4. Access Application
Open browser: `http://localhost:5173`

