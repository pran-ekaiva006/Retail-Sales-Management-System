import React from 'react'
import useStore from '../utils/store.js'

const FilterSection = ({title, icon, children}) => (
  <div style={{marginBottom: '24px'}}>
    <div style={{
      fontSize: '13px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }}>
      <span>{icon}</span>
      {title}
    </div>
    {children}
  </div>
)

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  fontSize: '14px',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  outline: 'none',
  transition: 'all 0.2s',
  boxSizing: 'border-box'
}

export default function Filters(){
  const { params, setParam } = useStore()
  
  return (
    <aside style={{
      background: '#f9fafb',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{
        margin: '0 0 20px 0',
        fontSize: '16px',
        fontWeight: '600',
        color: '#111827'
      }}>
        🎯 Filters
      </h3>

      <FilterSection title="Regions" icon="🌍">
        <input 
          value={params.regions} 
          onChange={e=>setParam('regions', e.target.value)} 
          placeholder="e.g., North, South, East"
          style={inputStyle}
        />
      </FilterSection>

      <FilterSection title="Gender" icon="👥">
        <input 
          value={params.gender} 
          onChange={e=>setParam('gender', e.target.value)} 
          placeholder="e.g., Male, Female"
          style={inputStyle}
        />
      </FilterSection>

      <FilterSection title="Age Range" icon="📅">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
          <input 
            type="number" 
            value={params.ageMin} 
            onChange={e=>setParam('ageMin', e.target.value)}
            placeholder="Min"
            min="0"
            style={inputStyle}
          />
          <input 
            type="number" 
            value={params.ageMax} 
            onChange={e=>setParam('ageMax', e.target.value)}
            placeholder="Max"
            min="0"
            style={inputStyle}
          />
        </div>
      </FilterSection>

      <FilterSection title="Categories" icon="📦">
        <input 
          value={params.categories} 
          onChange={e=>setParam('categories', e.target.value)} 
          placeholder="e.g., Electronics, Fashion"
          style={inputStyle}
        />
      </FilterSection>

      <FilterSection title="Tags" icon="🏷️">
        <input 
          value={params.tags} 
          onChange={e=>setParam('tags', e.target.value)} 
          placeholder="e.g., New, Sale"
          style={inputStyle}
        />
      </FilterSection>

      <FilterSection title="Payment Methods" icon="💳">
        <input 
          value={params.paymentMethods} 
          onChange={e=>setParam('paymentMethods', e.target.value)} 
          placeholder="e.g., Card, Cash"
          style={inputStyle}
        />
      </FilterSection>

      <FilterSection title="Date Range" icon="📆">
        <input 
          type="date"
          value={params.startDate} 
          onChange={e=>setParam('startDate', e.target.value)}
          style={{...inputStyle, marginBottom: '8px'}}
        />
        <input 
          type="date"
          value={params.endDate} 
          onChange={e=>setParam('endDate', e.target.value)}
          style={inputStyle}
        />
      </FilterSection>

      <button
        onClick={() => window.location.reload()}
        style={{
          width: '100%',
          padding: '10px',
          background: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseOver={e => e.target.style.background = '#5568d3'}
        onMouseOut={e => e.target.style.background = '#667eea'}
      >
        🔄 Reset Filters
      </button>
    </aside>
  )
}
