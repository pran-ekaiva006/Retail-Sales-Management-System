import React from 'react'
import useStore from '../utils/store.js'

const FilterSection = ({title, icon, children}) => (
  <div style={{marginBottom: '24px'}}>
    <div style={{
      fontSize: '13px',
      fontWeight: '600',
      color: '#0f172a',
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
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  outline: 'none',
  transition: 'all 0.2s',
  boxSizing: 'border-box',
  background: 'white',
  color: '#0f172a'
}

export default function Filters(){
  const { params, setParam } = useStore()
  
  return (
    <aside style={{
      background: 'white',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)'
    }}>
      <h3 style={{
        margin: '0 0 20px 0',
        fontSize: '18px',
        fontWeight: '700',
        color: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        🎯 Filters
      </h3>

      <FilterSection title="Regions" icon="🌍">
        <input 
          value={params.regions} 
          onChange={e=>setParam('regions', e.target.value)} 
          placeholder="e.g., North, South, East"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
      </FilterSection>

      <FilterSection title="Gender" icon="👥">
        <input 
          value={params.gender} 
          onChange={e=>setParam('gender', e.target.value)} 
          placeholder="e.g., Male, Female"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
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
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
          <input 
            type="number" 
            value={params.ageMax} 
            onChange={e=>setParam('ageMax', e.target.value)}
            placeholder="Max"
            min="0"
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>
      </FilterSection>

      <FilterSection title="Categories" icon="📦">
        <input 
          value={params.categories} 
          onChange={e=>setParam('categories', e.target.value)} 
          placeholder="e.g., Electronics, Fashion"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
      </FilterSection>

      <FilterSection title="Tags" icon="🏷️">
        <input 
          value={params.tags} 
          onChange={e=>setParam('tags', e.target.value)} 
          placeholder="e.g., New, Sale"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
      </FilterSection>

      <FilterSection title="Payment Methods" icon="💳">
        <input 
          value={params.paymentMethods} 
          onChange={e=>setParam('paymentMethods', e.target.value)} 
          placeholder="e.g., Card, Cash"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
      </FilterSection>

      <FilterSection title="Date Range" icon="📆">
        <input 
          type="date"
          value={params.startDate} 
          onChange={e=>setParam('startDate', e.target.value)}
          style={{...inputStyle, marginBottom: '8px'}}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
        <input 
          type="date"
          value={params.endDate} 
          onChange={e=>setParam('endDate', e.target.value)}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
      </FilterSection>

      <button
        onClick={() => window.location.reload()}
        style={{
          width: '100%',
          padding: '12px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: '0 1px 2px rgba(59, 130, 246, 0.3)'
        }}
        onMouseOver={e => {
          e.target.style.background = '#2563eb'
          e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.4)'
        }}
        onMouseOut={e => {
          e.target.style.background = '#3b82f6'
          e.target.style.boxShadow = '0 1px 2px rgba(59, 130, 246, 0.3)'
        }}
      >
        🔄 Reset Filters
      </button>
    </aside>
  )
}
