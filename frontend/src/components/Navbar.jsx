import React from 'react'

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleExportData = () => {
    // Get current data from the page
    const tableRows = document.querySelectorAll('table tbody tr')
    if (tableRows.length === 0) {
      alert('No data to export')
      return
    }

    // Create CSV content
    const headers = ['Date', 'Customer Name', 'Phone', 'Region', 'Category', 'Quantity', 'Amount']
    const csvContent = [
      headers.join(','),
      ...Array.from(tableRows).map(row => {
        const cells = row.querySelectorAll('td')
        return Array.from(cells).map(cell => {
          const text = cell.textContent.trim().replace(/,/g, '')
          return `"${text}"`
        }).join(',')
      })
    ].join('\n')

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `sales_data_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '16px 32px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo and Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: 'white',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            📊
          </div>
          <div>
            <h1 style={{
              margin: 0,
              color: 'white',
              fontSize: '24px',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>
              Retail Sales Dashboard
            </h1>
            <p style={{
              margin: 0,
              color: 'rgba(255,255,255,0.9)',
              fontSize: '13px',
              fontWeight: '400'
            }}>
              Advanced Analytics & Insights
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center'
        }}>
          <button
            onClick={() => scrollToSection('dashboard')}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            📈 Dashboard
          </button>
          
          <button
            onClick={() => scrollToSection('analytics')}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => e.target.style.background = 'transparent'}
          >
            📊 Analytics
          </button>
          
          <button
            onClick={() => scrollToSection('reports')}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => e.target.style.background = 'transparent'}
          >
            📄 Reports
          </button>
          
          <button
            onClick={handleExportData}
            style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            💾 Export Data
          </button>
        </div>
      </div>
    </nav>
  )
}