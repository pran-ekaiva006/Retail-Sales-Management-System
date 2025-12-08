import React from 'react'

export default function Sidebar() {
  const [activeItem, setActiveItem] = React.useState('Dashboard')
  const [servicesExpanded, setServicesExpanded] = React.useState(false)
  const [invoicesExpanded, setInvoicesExpanded] = React.useState(false)

  return (
    <aside style={{
      width: '260px',
      background: '#f5f5f5',
      borderRight: '1px solid #e0e0e0',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      height: '100vh',
      position: 'sticky',
      top: 0,
      overflowY: 'auto'
    }}>
      {/* Logo & User Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        marginBottom: '16px',
        background: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        cursor: 'pointer'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: '#000',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: '#4F46E5'
        }}>
          ⚡
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1a1a1a',
            lineHeight: '1.3'
          }}>
            Vault
          </div>
          <div style={{
            fontSize: '13px',
            color: '#6b7280',
            lineHeight: '1.3'
          }}>
            Pranjal Verma
          </div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {/* Dashboard */}
      <button
        onClick={() => setActiveItem('Dashboard')}
        style={{
          width: '100%',
          padding: '11px 14px',
          border: 'none',
          background: activeItem === 'Dashboard' ? '#f0f0f0' : 'transparent',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          color: '#374151',
          fontWeight: activeItem === 'Dashboard' ? '600' : '400',
          transition: 'all 0.15s'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <span>Dashboard</span>
      </button>

      {/* Nexus */}
      <button
        onClick={() => setActiveItem('Nexus')}
        style={{
          width: '100%',
          padding: '11px 14px',
          border: 'none',
          background: activeItem === 'Nexus' ? '#f0f0f0' : 'transparent',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          color: '#374151',
          fontWeight: activeItem === 'Nexus' ? '600' : '400',
          transition: 'all 0.15s'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v6m0 6v6"></path>
          <path d="M1 12h6m6 0h6"></path>
        </svg>
        <span>Nexus</span>
      </button>

      {/* Intake */}
      <button
        onClick={() => setActiveItem('Intake')}
        style={{
          width: '100%',
          padding: '11px 14px',
          border: 'none',
          background: activeItem === 'Intake' ? '#f0f0f0' : 'transparent',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          color: '#374151',
          fontWeight: activeItem === 'Intake' ? '600' : '400',
          transition: 'all 0.15s'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>Intake</span>
      </button>

      {/* Services Section */}
      <div style={{ marginTop: '8px' }}>
        <button
          onClick={() => setServicesExpanded(!servicesExpanded)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            borderRadius: '6px',
            transition: 'background 0.15s',
            fontSize: '14px',
            color: '#374151',
            fontWeight: '400'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>Services</span>
          </div>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#6b7280" 
            strokeWidth="2"
            style={{
              transform: servicesExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {servicesExpanded && (
          <div style={{ paddingLeft: '20px', marginTop: '4px' }}>
            {[
              { id: 'Pre-active', icon: '▶' },
              { id: 'Active', icon: '⏸' },
              { id: 'Blocked', icon: '✕' },
              { id: 'Closed', icon: '✓' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  border: 'none',
                  background: 'transparent',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '13px',
                  color: '#6b7280',
                  marginBottom: '2px',
                  transition: 'all 0.15s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#f9fafb'
                  e.currentTarget.style.color = '#374151'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#6b7280'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>{item.id}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Invoices Section */}
      <div style={{ marginTop: '8px' }}>
        <button
          onClick={() => setInvoicesExpanded(!invoicesExpanded)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            borderRadius: '6px',
            transition: 'background 0.15s',
            fontSize: '14px',
            color: '#374151',
            fontWeight: '400'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span>Invoices</span>
          </div>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#6b7280" 
            strokeWidth="2"
            style={{
              transform: invoicesExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {invoicesExpanded && (
          <div style={{ paddingLeft: '20px', marginTop: '4px' }}>
            {[
              { id: 'Proforma Invoices' },
              { id: 'Final Invoices' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  border: 'none',
                  background: activeItem === item.id ? '#f0f0f0' : 'transparent',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '13px',
                  color: '#6b7280',
                  marginBottom: '2px',
                  transition: 'all 0.15s',
                  fontWeight: activeItem === item.id ? '600' : '400'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#f9fafb'
                  e.currentTarget.style.color = '#374151'
                }}
                onMouseOut={(e) => {
                  if (activeItem !== item.id) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#6b7280'
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <span>{item.id}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}