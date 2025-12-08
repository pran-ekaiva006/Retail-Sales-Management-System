# 🏗️ Architecture Documentation

## 📋 Table of Contents
1. [Backend Architecture](#backend-architecture)
2. [Frontend Architecture](#frontend-architecture)
3. [Data Flow](#data-flow)
4. [Folder Structure](#folder-structure)
5. [Module Responsibilities](#module-responsibilities)

---

## 🔧 Backend Architecture

### Technology Stack
- **Runtime**: Node.js (≥16.0.0)
- **Framework**: Express 4.19.2
- **Database**: SQLite 3.x with better-sqlite3
- **Validation**: Zod 3.23.8

### Architecture Pattern
**Layered Architecture** with clear separation of concerns:

```
┌─────────────────────────────────────┐
│         HTTP Layer (Express)        │
│   - CORS, JSON parsing, routing     │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│         Controller Layer            │
│   - Request/Response handling       │
│   - Error handling                  │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│         Service Layer               │
│   - Business logic                  │
│   - SQL query building              │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│         Data Access Layer           │
│   - SQLite database                 │
│   - Direct SQL execution            │
└─────────────────────────────────────┘
```

### Key Components

#### 1. Database Layer (`utils/db.js`)
- **Initialization**: One-time CSV import into SQLite
- **Schema Creation**: Dynamic table creation from CSV headers
- **Indexing**: Performance optimization on frequently queried columns
- **Connection Management**: Synchronous better-sqlite3 API

**Indexes Created:**
```sql
CREATE INDEX idx_customer_name ON sales(customer_name);
CREATE INDEX idx_phone_number ON sales(phone_number);
CREATE INDEX idx_customer_region ON sales(customer_region);
CREATE INDEX idx_product_category ON sales(product_category);
CREATE INDEX idx_date ON sales(date);
```

#### 2. Validation Layer (`utils/query-validators.js`)
- **Schema Definition**: Zod schemas for type safety
- **Input Sanitization**: CSV to array transformation
- **Range Validation**: Age and date range constraints
- **Error Messages**: Descriptive validation errors

#### 3. Service Layer (`services/sales.service.js`)
- **Query Building**: Dynamic SQL construction based on filters
- **Parameterization**: SQL injection prevention
- **Pagination Logic**: LIMIT/OFFSET calculation
- **Result Transformation**: Raw SQL rows to API response format

#### 4. Controller Layer (`controllers/sales.controller.js`)
- **Request Parsing**: Query parameter extraction
- **Response Formatting**: JSON serialization
- **Error Handling**: HTTP status codes and error messages

#### 5. Routing Layer (`routes/sales.routes.js`)
- **Endpoint Definition**: RESTful API routes
- **Method Mapping**: GET requests to handlers

### API Endpoints

#### GET `/api/sales`
**Query Parameters:**
- `search` (string): Customer name or phone number
- `regions` (CSV): Customer regions (North, South, East, West)
- `gender` (CSV): Male, Female
- `ageMin`, `ageMax` (number): Age range (0-150)
- `categories` (CSV): Product categories
- `tags` (CSV): Product tags
- `paymentMethods` (CSV): Payment methods
- `startDate`, `endDate` (ISO date): Date range
- `sort` (enum): date_desc | quantity | name_asc
- `page` (number): Page number (default: 1)

**Response:**
```json
{
  "items": [...],
  "page": 1,
  "totalPages": 50,
  "total": 500
}
```

---

## ⚛️ Frontend Architecture

### Technology Stack
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.4.0
- **State Management**: Zustand 4.5.2
- **HTTP Client**: Axios 1.7.2
- **Styling**: Inline styles (CSS-in-JS)

### Architecture Pattern
**Component-Based Architecture** with unidirectional data flow:

```
┌─────────────────────────────────────┐
│            App Component            │
│   - Layout composition              │
│   - Route container                 │
└─────────────┬───────────────────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───▼────┐      ┌───────▼──────────┐
│Sidebar │      │  Main Content    │
└────────┘      └───────┬──────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
   │ Filters │    │ Sorting │    │  Stats  │
   └─────────┘    └─────────┘    └─────────┘
                        │
                  ┌─────▼──────┐
                  │   Table    │
                  └─────┬──────┘
                        │
                  ┌─────▼──────┐
                  │ Pagination │
                  └────────────┘
```

### State Management (Zustand Store)

**Store Structure:**
```javascript
{
  params: {
    search: '',
    regions: '',
    gender: '',
    ageMin: '',
    ageMax: '',
    categories: '',
    tags: '',
    paymentMethods: '',
    startDate: '',
    endDate: '',
    sort: 'date_desc',
    page: 1
  },
  data: {
    items: [],
    page: 1,
    totalPages: 1,
    total: 0
  },
  loading: false,
  error: null
}
```

**Store Actions:**
- `setParam(key, value)`: Update filter parameter and trigger data fetch
- `fetchData()`: Call API with current parameters

### Component Hierarchy

#### 1. **App.jsx** (Root)
- Layout composition
- Header with title and search
- Filters and sorting row
- Main content area

#### 2. **Sidebar.jsx**
- Navigation menu
- Collapsible sections (Services, Invoices)
- Active state management

#### 3. **SearchBar.jsx**
- Text input for search
- Real-time search on customer name/phone
- Debounced API calls

#### 4. **Filters.jsx**
- FilterDropdown: Multi-select dropdowns
- AgeRangeFilter: Number range inputs
- DateRangeFilter: Date range picker
- Refresh button

#### 5. **Sorting.jsx**
- Dropdown for sort options
- Triggers data refetch on change

#### 6. **StatsCards.jsx**
- Displays aggregate statistics
- Total units sold
- Total amount
- Total discount

#### 7. **SalesTable.jsx**
- Data grid with columns
- Loading/error/empty states
- Copy-to-clipboard for IDs

#### 8. **Pagination.jsx**
- Previous/Next navigation
- Page indicator
- Disabled state management

### Data Fetching Strategy

**API Service (`services/api.js`):**
```javascript
// Centralized API client
const api = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: 10000
})

// Single endpoint wrapper
export async function fetchSales(params) {
  const response = await api.get('/sales', { params })
  return response.data
}
```

**Fetch Flow:**
1. User interaction triggers `setParam()`
2. Zustand updates state and calls `fetchData()`
3. API service makes HTTP request
4. Response updates store state
5. Components re-render with new data

---

## 🔄 Data Flow

### Complete Request-Response Cycle

```
┌──────────────────────────────────────────────────────────────┐
│                     USER INTERACTION                         │
│   (Search, Filter, Sort, Page change)                        │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                   ZUSTAND STORE                              │
│   - setParam(key, value)                                     │
│   - Update params state                                      │
│   - Reset to page 1 (if not page change)                     │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                   API SERVICE (Axios)                        │
│   - Build query string from params                           │
│   - GET /api/sales?search=John&page=1                        │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                  EXPRESS MIDDLEWARE                          │
│   - CORS validation                                          │
│   - JSON parsing                                             │
│   - Route matching                                           │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                CONTROLLER (sales.controller.js)              │
│   - Extract req.query                                        │
│   - Call parseQuery(query)                                   │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│             VALIDATOR (query-validators.js)                  │
│   - Zod schema validation                                    │
│   - Type coercion (string → number)                          │
│   - CSV to array transformation                              │
│   - Range validation (ageMin ≤ ageMax)                       │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│              SERVICE (sales.service.js)                      │
│   - Build SQL query dynamically                              │
│   - Add WHERE clauses for each filter                        │
│   - Add ORDER BY clause                                      │
│   - Execute COUNT query                                      │
│   - Execute SELECT with LIMIT/OFFSET                         │
│   - Transform rows to response format                        │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                    SQLITE DATABASE                           │
│   - Execute prepared statements                              │
│   - Use indexes for performance                              │
│   - Return result rows                                       │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                   CONTROLLER RESPONSE                        │
│   - res.json({ items, page, totalPages, total })            │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                   AXIOS INTERCEPTOR                          │
│   - Parse response.data                                      │
│   - Handle errors                                            │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                   ZUSTAND STORE UPDATE                       │
│   - set({ data: responseData, loading: false })             │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                  REACT RE-RENDER                             │
│   - Components subscribed to store update                    │
│   - SalesTable renders new items                             │
│   - Pagination updates page numbers                          │
│   - StatsCards recalculate totals                            │
└──────────────────────────────────────────────────────────────┘
```

### Error Handling Flow

```
API Error → Axios catches → Store sets error state → UI shows error message
                                                     (SalesTable displays error)
```

---

## 📁 Folder Structure

### Backend Structure
```
backend/
├── src/
│   ├── index.js                    # Express app entry point
│   ├── controllers/
│   │   └── sales.controller.js     # Request/response handlers
│   ├── services/
│   │   └── sales.service.js        # Business logic & SQL queries
│   ├── routes/
│   │   └── sales.routes.js         # Route definitions
│   ├── utils/
│   │   ├── db.js                   # Database initialization
│   │   ├── query-validators.js     # Zod validation schemas
│   │   ├── paths.js                # File path constants
│   │   └── download-csv.js         # CSV file verification
│   └── data/
│       ├── data-sample.csv         # Sample dataset
│       └── README.txt              # Data setup instructions
├── sales.db                        # SQLite database (generated)
├── package.json
└── .env                            # Environment variables
```

### Frontend Structure
```
frontend/
├── src/
│   ├── main.jsx                    # React app entry point
│   ├── App.jsx                     # Root component
│   ├── components/
│   │   ├── Sidebar.jsx             # Navigation sidebar
│   │   ├── SearchBar.jsx           # Search input
│   │   ├── Filters.jsx             # Filter dropdowns
│   │   ├── Sorting.jsx             # Sort dropdown
│   │   ├── StatsCards.jsx          # Statistics cards
│   │   ├── SalesTable.jsx          # Data table
│   │   └── Pagination.jsx          # Pagination controls
│   ├── services/
│   │   └── api.js                  # Axios API client
│   └── utils/
│       └── store.js                # Zustand state management
├── public/
│   └── screenshots/                # UI screenshots
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── package.json
└── .env                            # Environment variables
```

### Root Structure
```
truestate_retail_sales/
├── backend/                        # Express backend
├── frontend/                       # React frontend
├── docs/
│   └── architecture.md             # This file
├── README.md                       # Project documentation
├── render.yaml                     # Deployment configuration
└── .gitignore                      # Git ignore rules
```

---

## 🎯 Module Responsibilities

### Backend Modules

#### `index.js` (Entry Point)
**Responsibilities:**
- Initialize Express application
- Configure middleware (CORS, JSON parsing)
- Initialize SQLite database
- Register API routes
- Start HTTP server
- Health check endpoints

**Dependencies:**
- `express`, `cors`
- `utils/db.js`
- `routes/sales.routes.js`

---

#### `controllers/sales.controller.js`
**Responsibilities:**
- Handle HTTP requests to `/api/sales`
- Extract and log query parameters
- Call validation layer
- Call service layer
- Format and send JSON responses
- Handle errors with appropriate status codes

**Key Functions:**
- `getSalesHandler(req, res)`: Main endpoint handler

**Dependencies:**
- `utils/query-validators.js`
- `services/sales.service.js`

---

#### `services/sales.service.js`
**Responsibilities:**
- Build dynamic SQL queries based on filters
- Implement search logic (LIKE queries)
- Apply filters (IN clauses, range queries)
- Implement sorting logic
- Calculate pagination (LIMIT/OFFSET)
- Execute COUNT and SELECT queries
- Transform database rows to API format

**Key Functions:**
- `querySales(db, filters)`: Main query builder and executor

**SQL Query Pattern:**
```javascript
SELECT * FROM sales
WHERE 1=1
  AND customer_name LIKE ?
  AND gender IN (?, ?)
  AND age >= ? AND age <= ?
ORDER BY date DESC
LIMIT 10 OFFSET 0
```

**Dependencies:**
- SQLite database connection

---

#### `utils/db.js`
**Responsibilities:**
- Initialize SQLite database connection
- Check if database already exists
- Read and parse CSV file
- Create dynamic table schema
- Insert data in batches (1000 records/batch)
- Create performance indexes
- Handle CSV parsing edge cases (quoted fields)

**Key Functions:**
- `initDB()`: Main initialization function
- `parseCSVLine(line)`: CSV parsing with quote handling
- `sanitizeColumnName(name)`: Convert headers to SQL column names

**Performance Optimizations:**
- Batch inserts (1000 rows at a time)
- Transaction wrapping for speed
- Indexed columns for fast queries

**Dependencies:**
- `better-sqlite3`
- `readline`, `fs`

---

#### `utils/query-validators.js`
**Responsibilities:**
- Define Zod validation schemas
- Validate query parameter types
- Transform CSV strings to arrays
- Validate age ranges (0-150)
- Validate date ranges (start ≤ end)
- Provide descriptive error messages

**Key Functions:**
- `parseQuery(query)`: Validate and transform query params

**Validation Rules:**
- `search`: String, max 200 chars
- `ageMin/ageMax`: Integer, 0-150, min ≤ max
- `startDate/endDate`: ISO date strings, start ≤ end
- `sort`: Enum (date_desc, quantity, name_asc)
- `page`: Positive integer

**Dependencies:**
- `zod`

---

#### `utils/paths.js`
**Responsibilities:**
- Define file path constants
- Resolve paths relative to project root
- Export DB_PATH and CSV_PATH

**Constants:**
- `DB_PATH`: `backend/sales.db`
- `CSV_PATH`: `backend/src/data/data-sample.csv`

---

#### `routes/sales.routes.js`
**Responsibilities:**
- Define API route structure
- Map HTTP methods to controllers
- Export Express router

**Routes:**
- `GET /`: List sales with filters

**Dependencies:**
- `express.Router`
- `controllers/sales.controller.js`

---

### Frontend Modules

#### `App.jsx` (Root Component)
**Responsibilities:**
- Define application layout
- Compose child components
- Arrange header, filters, content areas
- No state management (delegated to Zustand)

**Child Components:**
- `<Sidebar />`: Navigation menu
- `<SearchBar />`: Search input
- `<Filters />`: Filter controls
- `<Sorting />`: Sort dropdown
- `<StatsCards />`: Statistics display
- `<SalesTable />`: Data grid
- `<Pagination />`: Page navigation

---

#### `components/Sidebar.jsx`
**Responsibilities:**
- Display navigation menu
- Handle menu item selection
- Expand/collapse sections (Services, Invoices)
- Show active state styling

**Local State:**
- `activeItem`: Currently selected menu item
- `servicesExpanded`: Services section state
- `invoicesExpanded`: Invoices section state

---

#### `components/SearchBar.jsx`
**Responsibilities:**
- Render search input field
- Update store on input change
- Debounce API calls (optional)

**Store Integration:**
- Reads: None
- Updates: `setParam('search', value)`

---

#### `components/Filters.jsx`
**Responsibilities:**
- Render filter controls (dropdowns, inputs)
- Handle multi-select filters (checkboxes)
- Validate age ranges (min ≤ max)
- Validate date ranges (start ≤ end)
- Show error messages for invalid inputs
- Reset all filters

**Sub-Components:**
- `FilterDropdown`: Generic dropdown with multi-select
- `AgeRangeFilter`: Age range inputs with validation
- `DateRangeFilter`: Date picker inputs with validation

**Store Integration:**
- Reads: `params` (to display current values)
- Updates: `setParam(key, value)` for each filter

---

#### `components/Sorting.jsx`
**Responsibilities:**
- Render sort dropdown
- Update store on selection change

**Sort Options:**
- Date (Newest First)
- Customer Name (A-Z)
- Quantity

**Store Integration:**
- Reads: `params.sort`
- Updates: `setParam('sort', value)`

---

#### `components/StatsCards.jsx`
**Responsibilities:**
- Calculate aggregate statistics from data
- Display total units sold
- Display total amount
- Display total discount (placeholder)

**Calculations:**
- `totalUnits`: Sum of all `quantity` fields
- `totalAmount`: Sum of all `finalAmount` fields
- `totalSRs`: Count of items

**Store Integration:**
- Reads: `data.items`
- Updates: None

---

#### `components/SalesTable.jsx`
**Responsibilities:**
- Display sales data in table format
- Show loading state (spinner)
- Show error state (error message)
- Show empty state (no results)
- Implement copy-to-clipboard for transaction IDs

**Columns:**
- Transaction ID
- Date
- Customer ID
- Customer Name
- Phone Number (with copy button)
- Gender
- Age
- Product Category
- Quantity

**Store Integration:**
- Reads: `data.items`, `loading`, `error`
- Updates: None

---

#### `components/Pagination.jsx`
**Responsibilities:**
- Display current page and total pages
- Handle Previous/Next navigation
- Disable buttons at boundaries
- Update store on page change

**Store Integration:**
- Reads: `data.page`, `data.totalPages`
- Updates: `setParam('page', newPage)`

---

#### `services/api.js`
**Responsibilities:**
- Create Axios instance with base URL
- Set default timeout (10 seconds)
- Add request/response interceptors
- Implement `fetchSales(params)` function
- Handle API errors gracefully

**Configuration:**
- `baseURL`: `process.env.VITE_API_URL` or `http://localhost:5001/api`
- `timeout`: 10000ms
- `headers`: Content-Type: application/json

**Error Handling:**
- Catch network errors
- Extract error messages from responses
- Re-throw with descriptive messages

---

#### `utils/store.js` (Zustand Store)
**Responsibilities:**
- Define global state shape
- Implement state update functions
- Handle API calls
- Manage loading and error states
- Initialize on app load

**State:**
```javascript
{
  params: { ... },      // Filter parameters
  data: { ... },        // API response data
  loading: false,       // Loading indicator
  error: null           // Error message
}
```

**Actions:**
- `setParam(key, value)`: Update single parameter, reset page, fetch data
- `fetchData()`: Call API with current params, update data/loading/error

**Initialization:**
- Calls `fetchData()` on store creation

---

## 🔐 Security Considerations

### Backend
- **SQL Injection Prevention**: Parameterized queries
- **CORS Configuration**: Whitelist allowed origins
- **Input Validation**: Zod schema validation
- **Error Handling**: No sensitive data in error messages

### Frontend
- **Environment Variables**: API URL from `.env`
- **Error Boundaries**: Graceful error handling
- **Timeout Configuration**: Prevent hanging requests

---

## 📊 Performance Optimizations

### Database
- **Indexes**: 5 indexes on frequently queried columns
- **Batch Inserts**: 1000 records per transaction
- **Prepared Statements**: Reuse compiled SQL

### Frontend
- **Code Splitting**: Vendor chunk separation
- **Lazy State Updates**: Debounced search (optional)
- **Memoization**: React components optimize re-renders

### Network
- **Pagination**: 10 items per page reduces payload
- **Request Deduplication**: Zustand prevents duplicate calls
- **Timeout**: 10s to prevent hanging requests

---

## 🚀 Deployment Architecture

```
┌─────────────────────────────────────┐
│         Frontend (Render)           │
│   - Static files served by CDN      │
│   - Environment: VITE_API_URL       │
└────────────────┬────────────────────┘
                 │ HTTPS
                 ▼
┌─────────────────────────────────────┐
│         Backend (Render)            │
│   - Express server on PORT 5001     │
│   - SQLite database file            │
│   - Environment: NODE_ENV, CORS     │
└─────────────────────────────────────┘
```

### Build Process
1. **Backend**: `npm install` → Database initialization → `npm start`
2. **Frontend**: `npm install` → `npm run build` → Serve `dist/`

---

## 📝 Summary

This architecture implements a **clean separation of concerns** with:

- **Backend**: Layered architecture (Controller → Service → Data)
- **Frontend**: Component-based architecture with centralized state
- **Data Flow**: Unidirectional (UI → Store → API → Store → UI)
- **Security**: Parameterized queries, validation, CORS
- **Performance**: Indexes, batch processing, pagination

The system is **scalable**, **maintainable**, and follows **industry best practices** for full-stack JavaScript applications.