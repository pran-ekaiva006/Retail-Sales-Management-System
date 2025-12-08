import React from 'react'
import useStore from '../utils/store.js'

export default function SalesTable(){
  const { data, loading, error } = useStore()
  
  if (loading) return (
    <div style={{textAlign: 'center', padding: '60px', color: '#9ca3af'}}>
      <div style={{
        fontSize: '48px', 
        marginBottom: '16px',
        animation: 'spin 2s linear infinite'
      }}>⏳</div>
      <p style={{fontSize: '16px', fontWeight: '600', marginBottom: '8px'}}>
        Loading sales data...
      </p>
      <p style={{fontSize: '13px', color: '#9ca3af'}}>
        This may take up to 60 seconds on first load (free tier)
      </p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
  
  if (error) return (
    <div style={{textAlign: 'center', padding: '60px', color: '#dc2626'}}>
      <div style={{fontSize: '48px', marginBottom: '16px'}}>⚠️</div>
      <p style={{fontSize: '16px', fontWeight: '600', marginBottom: '8px'}}>
        {error}
      </p>
      <p style={{fontSize: '13px', color: '#9ca3af', marginBottom: '16px'}}>
        The server may be waking up from sleep. Please wait a moment and try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '10px 20px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600'
        }}
      >
        Retry
      </button>
    </div>
  )
  
  if (!data.items || data.items.length === 0) {
    return (
      <div style={{textAlign: 'center', padding: '60px', color: '#9ca3af'}}>
        <div style={{fontSize: '28px', marginBottom: '12px'}}>🔍</div>
        <p style={{fontSize: '14px', fontWeight: '500'}}>No results found</p>
      </div>
    )
  }
  
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '13px'
      }}>
        <thead>
          <tr style={{
            borderBottom: '1px solid #e5e7eb',
            background: '#f9fafb'
          }}>
            <th style={{padding: '12px', textAlign: 'left', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Transaction ID</th>
            <th style={{padding: '12px', textAlign: 'left', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Date</th>
            <th style={{padding: '12px', textAlign: 'left', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Customer ID</th>
            <th style={{padding: '12px', textAlign: 'left', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Customer Name</th>
            <th style={{padding: '12px', textAlign: 'left', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Phone Number</th>
            <th style={{padding: '12px', textAlign: 'left', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Gender</th>
            <th style={{padding: '12px', textAlign: 'left', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Age</th>
            <th style={{padding: '12px', textAlign: 'left', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Product Category</th>
            <th style={{padding: '12px', textAlign: 'right', fontWeight: '500', color: '#6b7280', fontSize: '12px'}}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((r, i) => (
            <tr 
              key={i} 
              style={{
                borderBottom: '1px solid #f3f4f6',
                transition: 'background 0.15s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#f9fafb'}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <td style={{padding: '14px 12px', color: '#9ca3af', fontSize: '13px'}}>{r.transactionId || '1234567'}</td>
              <td style={{padding: '14px 12px', color: '#374151', fontSize: '13px'}}>{r.date}</td>
              <td style={{padding: '14px 12px', color: '#9ca3af', fontSize: '13px'}}>{r.customerId || 'CUST12016'}</td>
              <td style={{padding: '14px 12px', color: '#111827', fontWeight: '600', fontSize: '13px'}}>{r.customerName}</td>
              <td style={{padding: '14px 12px', color: '#374151', fontSize: '13px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                  {r.phone}
                  <button style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center'
                  }} title="Copy phone number">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td style={{padding: '14px 12px', color: '#374151', fontSize: '13px'}}>{r.gender || 'Female'}</td>
              <td style={{padding: '14px 12px', color: '#374151', fontSize: '13px'}}>{r.age || 25}</td>
              <td style={{padding: '14px 12px', color: '#111827', fontWeight: '600', fontSize: '13px'}}>{r.category}</td>
              <td style={{padding: '14px 12px', textAlign: 'right', color: '#111827', fontWeight: '700', fontSize: '13px'}}>
                {String(r.quantity).padStart(2, '0')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}