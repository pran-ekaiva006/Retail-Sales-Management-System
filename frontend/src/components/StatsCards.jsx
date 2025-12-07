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
      gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      shadowColor: 'rgba(99, 102, 241, 0.3)'
    },
    {
      icon: '💰',
      label: 'Total Revenue',
      value: `₹${totalRevenue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      shadowColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      icon: '📊',
      label: 'Avg Order Value',
      value: `₹${avgOrderValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      shadowColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      icon: '📦',
      label: 'Total Items',
      value: totalQuantity.toLocaleString(),
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      shadowColor: 'rgba(236, 72, 153, 0.3)'
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
          background: stat.gradient,
          padding: '28px',
          borderRadius: '16px',
          boxShadow: `0 4px 20px ${stat.shadowColor}`,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s',
          cursor: 'pointer',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)'
          e.currentTarget.style.boxShadow = `0 12px 32px ${stat.shadowColor}`
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = `0 4px 20px ${stat.shadowColor}`
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: '40px',
              marginBottom: '16px',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
            }}>
              {stat.icon}
            </div>
            <p style={{
              margin: '0 0 8px 0',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.9)',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {stat.label}
            </p>
            <p style={{
              margin: 0,
              fontSize: '28px',
              fontWeight: '800',
              letterSpacing: '-0.5px'
            }}>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}@