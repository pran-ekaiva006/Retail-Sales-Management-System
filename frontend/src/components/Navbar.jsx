import React from 'react'

export default function Navbar() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)
  const [isTablet, setIsTablet] = React.useState(window.innerWidth > 768 && window.innerWidth <= 1024)
  const [showMenu, setShowMenu] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('dashboard')

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
      setIsTablet(width > 768 && width <= 1024)
      if (width > 768) setShowMenu(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setShowMenu(false)
      setActiveSection(sectionId)
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
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      backdropFilter: 'blur(20px)',
      padding: isMobile ? '16px 20px' : '20px 40px',
      borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)'
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo and Brand */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: isMobile ? '12px' : '16px',
          minWidth: isMobile ? 'auto' : '300px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            padding: isMobile ? '10px' : isTablet ? '11px' : '12px',
            borderRadius: '12px',
            fontSize: isMobile ? '24px' : isTablet ? '26px' : '28px',
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            📊
          </div>
          <div>
            <h1 style={{
              margin: 0,
              color: '#f1f5f9',
              fontSize: isMobile ? '16px' : isTablet ? '20px' : '24px',
              fontWeight: '700',
              letterSpacing: '-0.5px',
              lineHeight: '1.2'
            }}>
              Retail Sales Dashboard
            </h1>
            {!isMobile && (
              <p style={{
                margin: '2px 0 0 0',
                color: '#94a3b8',
                fontSize: isTablet ? '12px' : '14px',
                fontWeight: '500',
                letterSpacing: '0.3px'
              }}>
                Advanced Analytics Platform
              </p>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{
            display: 'flex',
            gap: isTablet ? '6px' : '10px',
            alignItems: 'center'
          }}>
            {[
              { id: 'dashboard', icon: '📈', label: 'Dashboard' },
              { id: 'analytics', icon: '📊', label: 'Analytics' },
              { id: 'reports', icon: '📄', label: 'Reports' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  color: activeSection === item.id ? '#ffffff' : '#94a3b8',
                  fontSize: isTablet ? '15px' : '16px',
                  fontWeight: '600',
                  padding: isTablet ? '10px 16px' : '12px 24px',
                  borderRadius: '12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: activeSection === item.id 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                    : 'transparent',
                  border: activeSection === item.id
                    ? '1px solid rgba(59, 130, 246, 0.4)'
                    : '1px solid transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  if (activeSection !== item.id) {
                    e.target.style.background = 'rgba(148, 163, 184, 0.1)'
                    e.target.style.color = '#f1f5f9'
                    e.target.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== item.id) {
                    e.target.style.background = 'transparent'
                    e.target.style.color = '#94a3b8'
                    e.target.style.transform = 'translateY(0)'
                  }
                }}
              >
                <span style={{ fontSize: isTablet ? '20px' : '22px' }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            
            <div style={{
              width: '1px',
              height: '36px',
              background: 'linear-gradient(180deg, transparent 0%, #334155 50%, transparent 100%)',
              margin: isTablet ? '0 4px' : '0 8px'
            }} />

            <button
              onClick={handleExportData}
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                padding: isTablet ? '10px 20px' : '12px 28px',
                borderRadius: '12px',
                fontSize: isTablet ? '15px' : '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 24px rgba(59, 130, 246, 0.5)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.4)'
              }}
            >
              <span style={{ fontSize: isTablet ? '20px' : '22px' }}>💾</span>
              <span>Export Data</span>
            </button>
          </div>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{
              background: showMenu 
                ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                : 'rgba(148, 163, 184, 0.1)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              color: 'white',
              fontSize: '22px',
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: showMenu ? '0 4px 16px rgba(59, 130, 246, 0.4)' : 'none'
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
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(148, 163, 184, 0.1)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          animation: 'slideDown 0.3s ease-out'
        }}>
          {[
            { id: 'dashboard', icon: '📈', label: 'Dashboard' },
            { id: 'analytics', icon: '📊', label: 'Analytics' },
            { id: 'reports', icon: '📄', label: 'Reports' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                padding: '18px 20px',
                borderRadius: '12px',
                background: activeSection === item.id
                  ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                  : 'rgba(148, 163, 184, 0.1)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span style={{ fontSize: '22px' }}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}

          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(148, 163, 184, 0.2) 50%, transparent 100%)',
            margin: '8px 0'
          }} />
          
          <button
            onClick={handleExportData}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              color: 'white',
              border: 'none',
              padding: '18px 20px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(59, 130, 246, 0.4)',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <span style={{ fontSize: '22px' }}>💾</span>
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