import React from 'react'
import useStore from '../utils/store.js'

export default function SalesTable(){
  const { data, loading, error } = useStore()
  
  console.log('SalesTable render:', { data, loading, error }) // Debug log
  
  if (loading) return (
    <div style={{textAlign: 'center', padding: '60px', color: '#6b7280'}}>
      <div style={{fontSize: '48px', marginBottom: '16px'}}>⏳</div>
      <p style={{fontSize: '16px', margin: 0}}>Loading sales data...</p>
    </div>
  )
  
  if (error) return (
    <div style={{
      textAlign: 'center',
      padding: '60px',
      background: '#fef2f2',
      borderRadius: '12px',
      color: '#dc2626'
    }}>
      <div style={{fontSize: '48px', marginBottom: '16px'}}>⚠️</div>
      <p style={{fontSize: '16px', margin: 0, fontWeight: '500'}}>{error}</p>
    </div>
  )

  if (!data.items || data.items.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '60px',
        background: '#f9fafb',
        borderRadius: '12px',
        color: '#6b7280'
      }}>
        <div style={{fontSize: '48px', marginBottom: '16px'}}>🔍</div>
        <p style={{fontSize: '16px', margin: 0}}>No results found</p>
        <p style={{fontSize: '14px', margin: '8px 0 0 0'}}>Try adjusting your filters or search term</p>
      </div>
    )
  }
  
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      background: 'white'
    }}>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{background: '#f9fafb', borderBottom: '2px solid #e5e7eb'}}>
            <th style={{padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#374151'}}>📅 Date</th>
            <th style={{padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#374151'}}>👤 Customer</th>
            <th style={{padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#374151'}}>📞 Phone</th>
            <th style={{padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#374151'}}>🌍 Region</th>
            <th style={{padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#374151'}}>📦 Category</th>
            <th style={{padding: '16px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#374151'}}>📊 Qty</th>
            <th style={{padding: '16px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#374151'}}>💰 Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((r, i) => (
            <tr 
              key={i} 
              style={{
                borderBottom: '1px solid #f3f4f6',
                transition: 'background 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.background = '#f9fafb'}
              onMouseOut={e => e.currentTarget.style.background = 'white'}
            >
              <td style={{padding: '14px 16px', fontSize: '14px', color: '#374151'}}>{r.date}</td>
              <td style={{padding: '14px 16px', fontSize: '14px', color: '#111827', fontWeight: '500'}}>{r.customerName}</td>
              <td style={{padding: '14px 16px', fontSize: '14px', color: '#6b7280'}}>{r.phone}</td>
              <td style={{padding: '14px 16px', fontSize: '14px'}}>
                <span style={{
                  padding: '4px 10px',
                  background: '#dbeafe',
                  color: '#1e40af',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '500'
                }}>
                  {r.region}
                </span>
              </td>
              <td style={{padding: '14px 16px', fontSize: '14px', color: '#374151'}}>{r.category}</td>
              <td style={{padding: '14px 16px', fontSize: '14px', color: '#374151', textAlign: 'right', fontWeight: '600'}}>{r.quantity}</td>
              <td style={{padding: '14px 16px', fontSize: '14px', color: '#059669', textAlign: 'right', fontWeight: '600'}}>
                ₹{r.finalAmount ? r.finalAmount.toFixed(2) : '0.00'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
