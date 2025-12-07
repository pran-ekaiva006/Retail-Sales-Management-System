import React from 'react'

export default function Navbar() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)
  const [showMenu, setShowMenu] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) setShowMenu(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setShowMenu(false)
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
    setShowMenu(false)
  }

  return (
    <nav style={{
      background: 'rgba(15, 23, 41, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: isMobile ? '12px 16px' : '16px 32px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo and Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            padding: isMobile ? '6px 10px' : '8px 12px',
            borderRadius: '8px',
            fontSize: isMobile ? '20px' : '24px',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}>
            📊
          </div>
          <div>
            <h1 style={{
              margin: 0,
              color: 'white',
              fontSize: isMobile ? '14px' : '20px',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>
              Retail Sales Dashboard
            </h1>
            {!isMobile && (
              <p style={{
                margin: 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: '12px',
                fontWeight: '400'
              }}>
                Advanced Analytics & Insights
              </p>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
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
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{
              background: showMenu ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: 'white',
              fontSize: '20px',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              boxShadow: showMenu ? '0 4px 12px rgba(59, 130, 246, 0.4)' : 'none'
            }}
          >
            {showMenu ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && showMenu && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          animation: 'slideDown 0.3s ease-out',
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto'
        }}>
          <button
            onClick={() => scrollToSection('dashboard')}
            style={{
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              padding: '14px 16px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.2s'
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)'
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <span style={{ fontSize: '20px' }}>📈</span>
            <span>Dashboard</span>
          </button>
          
          <button
            onClick={() => scrollToSection('analytics')}
            style={{
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              padding: '14px 16px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s'
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
          >
            <span style={{ fontSize: '20px' }}>📊</span>
            <span>Analytics</span>
          </button>
          
          <button
            onClick={() => scrollToSection('reports')}
            style={{
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              padding: '14px 16px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s'
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
          >
            <span style={{ fontSize: '20px' }}>📄</span>
            <span>Reports</span>
          </button>

          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            margin: '8px 0'
          }} />
          
          <button
            onClick={handleExportData}
            style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              color: 'white',
              border: 'none',
              padding: '14px 16px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s'
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)'
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <span style={{ fontSize: '20px' }}>💾</span>
            <span>Export Data</span>
          </button>
        </div>
      )}

      {/* Add animation keyframes */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}