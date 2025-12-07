import React from 'react'
import useStore from '../utils/store.js'

export default function StatsCards() {
  const { data } = useStore()
  
  // Calculate stats
  const totalSales = data.total || 0
  const totalRevenue = data.items.reduce((sum, item) => sum + (item.finalAmount || 0), 0)
  const avgOrderValue = totalSales > 0 ? totalRevenue / totalSales : 0
  const totalQuantity = data.items.reduce((sum, item) => sum + (item.quantity || 0), 0)

  const stats = [
    {
      icon: '🛒',
      label: 'Total Sales',
      value: totalSales.toLocaleString(),
      color: '#667eea',
      bgColor: '#eef2ff'
    },
    {
      icon: '💰',
      label: 'Total Revenue',
      value: `₹${totalRevenue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
      color: '#10b981',
      bgColor: '#d1fae5'
    },
    {
      icon: '📊',
      label: 'Avg Order Value',
      value: `₹${avgOrderValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
      color: '#f59e0b',
      bgColor: '#fef3c7'
    },
    {
      icon: '📦',
      label: 'Total Items',
      value: totalQuantity.toLocaleString(),
      color: '#ec4899',
      bgColor: '#fce7f3'
    }
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginBottom: '32px'
    }}>
      {stats.map((stat, idx) => (
        <div key={idx} style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid #f3f4f6',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: stat.bgColor,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px'
            }}>
              {stat.icon}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{
                margin: 0,
                fontSize: '13px',
                color: '#6b7280',
                fontWeight: '500',
                marginBottom: '4px'
              }}>
                {stat.label}
              </p>
              <p style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: '700',
                color: stat.color
              }}>
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}