import React from 'react'

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleExportData = () => {
    const tableRows = document.querySelectorAll('table tbody tr')
    if (tableRows.length === 0) {
      alert('No data to export')
      return
    }

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
      background: 'rgba(15, 23, 41, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '16px 32px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
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
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '24px',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}>
            📊
          </div>
          <div>
            <h1 style={{
              margin: 0,
              color: 'white',
              fontSize: '20px',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>
              Retail Sales Dashboard
            </h1>
            <p style={{
              margin: 0,
              color: 'rgba(255,255,255,0.5)',
              fontSize: '12px',
              fontWeight: '400'
            }}>
              Advanced Analytics & Insights
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
          <button
            onClick={() => scrollToSection('dashboard')}
            style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              padding: '10px 20px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(59, 130, 246, 0.2)'
              e.target.style.borderColor = '#3b82f6'
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(59, 130, 246, 0.1)'
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)'
            }}
          >
            📈 Dashboard
          </button>
          
          <button
            onClick={() => scrollToSection('analytics')}
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '14px',
              fontWeight: '500',
              padding: '10px 20px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              background: 'transparent',
              border: '1px solid transparent',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'white'
              e.target.style.background = 'rgba(255,255,255,0.05)'
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'rgba(255,255,255,0.7)'
              e.target.style.background = 'transparent'
            }}
          >
            📊 Analytics
          </button>
          
          <button
            onClick={() => scrollToSection('reports')}
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '14px',
              fontWeight: '500',
              padding: '10px 20px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              background: 'transparent',
              border: '1px solid transparent',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'white'
              e.target.style.background = 'rgba(255,255,255,0.05)'
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'rgba(255,255,255,0.7)'
              e.target.style.background = 'transparent'
            }}
          >
            📄 Reports
          </button>
          
          <button
            onClick={handleExportData}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.2s',
              marginLeft: '12px'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}
          >
            💾 Export Data
          </button>
        </div>
      </div>
    </nav>
  )
}