import React from 'react'
import Navbar from './components/Navbar.jsx'
import StatsCards from './components/StatsCards.jsx'
import SearchBar from './components/SearchBar.jsx'
import Filters from './components/Filters.jsx'
import Sorting from './components/Sorting.jsx'
import SalesTable from './components/SalesTable.jsx'
import Pagination from './components/Pagination.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9fafb',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '48px 32px',
          marginBottom: '32px'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <h2 style={{
              margin: '0 0 12px 0',
              color: 'white',
              fontSize: '32px',
              fontWeight: '700'
            }}>
              Sales Analytics Dashboard
            </h2>
            <p style={{
              margin: 0,
              color: 'rgba(255,255,255,0.9)',
              fontSize: '16px'
            }}>
              Track and analyze your sales performance with advanced filtering and real-time insights
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 32px'
        }}>
          <StatsCards />
        </div>

        {/* Search Section */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 32px 32px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid #f3f4f6',
            marginBottom: '24px'
          }}>
            <SearchBar />
          </div>

          {/* Main Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '24px'
          }}>
            {/* Sidebar Filters */}
            <aside style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid #f3f4f6',
              height: 'fit-content',
              position: 'sticky',
              top: '90px'
            }}>
              <Filters />
            </aside>

            {/* Table Area */}
            <section>
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: '1px solid #f3f4f6'
              }}>
                <Sorting />
                <SalesTable />
                <Pagination />
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}