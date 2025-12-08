import React from 'react'
import useStore from '../utils/store.js'

export default function StatsCards() {
  const { data } = useStore()
  
  const totalUnits = data.items.reduce((sum, item) => sum + (item.quantity || 0), 0)
  const totalAmount = data.items.reduce((sum, item) => sum + (item.finalAmount || 0), 0)
  const totalSRs = data.items.length
  
  const stats = [
    {
      label: 'Total units sold',
      value: totalUnits,
      subtext: ''
    },
    {
      label: 'Total Amount',
      value: `₹${totalAmount.toLocaleString('en-IN')}`,
      subtext: `(${totalSRs} SRs)`
    },
    {
      label: 'Total Discount',
      value: '₹15000',
      subtext: '(45 SRs)'
    }
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      marginBottom: '24px'
    }}>
      {stats.map((stat, idx) => (
        <div key={idx} style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px',
            color: '#6b7280',
            fontSize: '13px',
            fontWeight: '500'
          }}>
            <span>{stat.label}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="#9ca3af" strokeWidth="1"/>
              <text x="8" y="11" fontSize="9" fill="#9ca3af" textAnchor="middle" fontWeight="600">i</text>
            </svg>
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#111827',
            lineHeight: '1.2',
            marginBottom: '4px'
          }}>
            {stat.value}
          </div>
          {stat.subtext && (
            <div style={{
              fontSize: '12px',
              color: '#9ca3af',
              fontWeight: '400'
            }}>
              {stat.subtext}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}