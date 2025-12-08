import Sidebar from './components/Sidebar.jsx'
import StatsCards from './components/StatsCards.jsx'
import SearchBar from './components/SearchBar.jsx'
import Filters from './components/Filters.jsx'
import Sorting from './components/Sorting.jsx'
import SalesTable from './components/SalesTable.jsx'
import Pagination from './components/Pagination.jsx'

export default function App() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#fafafa'
    }}>
      <Sidebar />
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 40px',
          background: '#ffffff',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            margin: 0
          }}>
            Sales Management System
          </h1>
          <SearchBar />
        </div>

        {/* Filters + Sorting Row */}
        <div style={{
          padding: '16px 40px',
          background: '#ffffff',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          <Filters />
          <div style={{ flex: 1 }} />
          <Sorting />
        </div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          padding: '24px 40px',
          background: '#fafafa'
        }}>
          <StatsCards />

          <div style={{
            background: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            marginTop: '24px'
          }}>
            <SalesTable />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}