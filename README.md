# 📊 Retail Sales Management System

A full-stack analytics dashboard for visualizing and managing retail sales data. This application provides real-time insights, advanced filtering, and efficient data handling using a React frontend and a Node.js/SQLite backend.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.2.0-blue.svg)

## ✨ Features

### 📈 Interactive Dashboard
- **Real-time KPIs**: Track Total Sales, Revenue, Average Order Value, and Total Items
- **Visual Analytics**: Beautiful cards with hover effects and smooth animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🔍 Advanced Search & Filtering
- **Instant Search**: Search by customer name or phone number with real-time results
- **Multi-criteria Filters**:
  - 🌍 Region (North, South, East, West)
  - 👥 Gender (Male, Female)
  - 📅 Age Range (Min/Max)
  - 📦 Product Categories
  - 🏷️ Product Tags
  - 💳 Payment Methods
  - 📆 Date Range Selection

### 📊 Data Grid
- **Sortable Columns**: Date, Quantity, Customer Name
- **Server-side Pagination**: 20 items per page for optimal performance
- **Styled Table**: Professional design with hover effects and color-coded badges

### ⚡ High Performance
- **Efficient Data Loading**: Stream-based CSV parsing to SQLite
- **Optimized Queries**: Indexed database columns for fast filtering
- **Smart State Management**: Zustand for minimal re-renders

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| [React](https://react.dev/) | UI Framework | 18.2.0 |
| [Vite](https://vitejs.dev/) | Build Tool | 5.4.0 |
| [Zustand](https://github.com/pmndrs/zustand) | State Management | 4.5.2 |
| [Axios](https://axios-http.com/) | HTTP Client | 1.7.2 |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| [Node.js](https://nodejs.org/) | Runtime | ≥16.0.0 |
| [Express](https://expressjs.com/) | Web Framework | 4.19.2 |
| [SQLite](https://www.sqlite.org/) | Database | - |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | SQLite Driver | 12.5.0 |
| [Zod](https://zod.dev/) | Validation | 3.23.8 |

## 📂 Project Structure

```
truestate_retail_sales/
├── backend/                      # Express Server & Database
│   ├── src/
│   │   ├── controllers/         # Request handlers
│   │   │   └── sales.controller.js
│   │   ├── data/                # CSV data storage
│   │   │   ├── data.csv
│   │   │   └── README.txt
│   │   ├── routes/              # API routes
│   │   │   └── sales.routes.js
│   │   ├── services/            # Business logic
│   │   │   └── sales.service.js
│   │   ├── utils/               # Utilities
│   │   │   ├── db.js           # Database connection
│   │   │   ├── loader.js       # CSV loader
│   │   │   ├── query-validators.js
│   │   │   └── transform.js
│   │   └── index.js            # Entry point
│   ├── package.json
│   └── sales.db                # SQLite database (auto-generated)
│
├── frontend/                    # React Application
│   ├── src/
│   │   ├── components/         # UI Components
│   │   │   ├── Filters.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── SalesTable.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Sorting.jsx
│   │   │   └── StatsCards.jsx
│   │   ├── services/           # API integration
│   │   │   └── api.js
│   │   ├── utils/              # Utilities
│   │   │   └── store.js       # Zustand store
│   │   ├── App.jsx             # Main app component
│   │   └── main.jsx            # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── docs/                        # Documentation
│   └── architecture.md
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Installation

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd truestate_retail_sales
```

#### 2. Data Setup
Place your CSV dataset in the backend data folder:
```bash
# Ensure data.csv exists in backend/src/data/
# The file will be automatically loaded into SQLite on first run
ls backend/src/data/data.csv
```

**CSV Format Example:**
```csv
Date,CustomerName,PhoneNumber,CustomerRegion,ProductCategory,Quantity,FinalAmount
2024-01-15,John Doe,9876543210,North,Electronics,2,45000
```

#### 3. Backend Setup
```bash
cd backend
npm install
npm run dev
```

**Expected Output:**
```
📂 Loading CSV data into database (streaming)...
  Found 20 columns
  Inserted 1000 records...
  Inserted 2000 records...
✅ Loaded 10000 records into database
🚀 Backend listening on :5001
```

#### 4. Frontend Setup
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```

**Expected Output:**
```
  VITE v5.4.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### 5. Access the Application
Open your browser and navigate to:
```
http://localhost:5173
```

## 🔌 API Documentation

### Base URL
```
http://localhost:5001/api
```

### Endpoints

#### `GET /api/sales`
Fetches paginated and filtered sales data.

**Query Parameters:**

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `page` | integer | Page number (default: 1) | `?page=2` |
| `search` | string | Search by name or phone | `?search=John` |
| `regions` | string | Comma-separated regions | `?regions=North,South` |
| `gender` | string | Comma-separated genders | `?gender=Male,Female` |
| `ageMin` | integer | Minimum age | `?ageMin=25` |
| `ageMax` | integer | Maximum age | `?ageMax=45` |
| `categories` | string | Comma-separated categories | `?categories=Electronics` |
| `tags` | string | Comma-separated tags | `?tags=New,Sale` |
| `paymentMethods` | string | Comma-separated methods | `?paymentMethods=Card,Cash` |
| `startDate` | string | Start date (YYYY-MM-DD) | `?startDate=2024-01-01` |
| `endDate` | string | End date (YYYY-MM-DD) | `?endDate=2024-12-31` |
| `sort` | string | Sort order | `?sort=date_desc` |

**Sort Options:**
- `date_desc` - Date (Newest First)
- `quantity` - Quantity (High to Low)
- `name_asc` - Customer Name (A-Z)

**Response Example:**
```json
{
  "items": [
    {
      "date": "2024-01-15",
      "customerName": "John Doe",
      "phone": "9876543210",
      "region": "North",
      "category": "Electronics",
      "quantity": 2,
      "finalAmount": 45000
    }
  ],
  "page": 1,
  "totalPages": 500,
  "total": 10000
}
```

#### `GET /api/health`
Health check endpoint to verify server and database status.

**Response:**
```json
{
  "status": "ok",
  "count": 10000
}
```

## 💡 Usage Examples

### Search for a Customer
```javascript
// In the search bar, type:
"John Doe"
// or
"9876543210"
```

### Apply Multiple Filters
```javascript
// Select filters:
Regions: North, South
Gender: Male
Age: 25-45
Categories: Electronics
Date Range: 2024-01-01 to 2024-12-31
```

### Export Data (Future Feature)
```javascript
// Click the "Export Data" button in the navbar
// Downloads filtered results as CSV
```

## 🏗️ Architecture

### Data Flow
```
User Input → React Components → Zustand Store → Axios API Call
                                                      ↓
                                            Express Backend
                                                      ↓
                                      Query Validation (Zod)
                                                      ↓
                                         SQLite Database
                                                      ↓
                                      JSON Response → UI Update
```

### Database Schema
The system automatically generates a SQLite table based on your CSV headers:

**Indexes:**
- `customer_name` - Fast name searches
- `phone_number` - Fast phone lookups
- `customer_region` - Regional filtering
- `product_category` - Category filtering
- `date` - Date range queries

## 🔧 Configuration

### Backend Configuration
Edit [`backend/src/index.js`](backend/src/index.js):
```javascript
const PORT = process.env.PORT || 5001;
```

### Frontend Configuration
Edit [`frontend/vite.config.js`](frontend/vite.config.js):
```javascript
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5001'
    }
  }
})
```

## 🐛 Troubleshooting

### Issue: Database not loading
**Solution:** Ensure `data.csv` exists in `backend/src/data/`

### Issue: CORS errors
**Solution:** Check that backend is running on port 5001

### Issue: No search results
**Solution:** Verify database has data: `GET /api/health`

### Issue: Build errors
**Solution:** Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Scripts

### Backend
```bash
npm run dev    # Start development server with hot reload
npm start      # Start production server
```

### Frontend
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Pranjal Kumar Verma** - *Initial work*

## 🙏 Acknowledgments

- React team for the amazing framework
- SQLite for the lightweight database
- Vite for the blazing fast build tool
- All contributors who help improve this project

## 📞 Support

For support, email: support@retailsales.com

---

Made with ❤️ by the Retail Sales Team

