import React from 'react'
import useStore from '../utils/store.js'

export default function Sorting(){
  const { params, setParam } = useStore()
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px'
    }}>
      <span style={{fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontWeight: '500'}}>
        Sort by:
      </span>
      <select 
        value={params.sort || 'date_desc'}
        onChange={(e) => setParam('sort', e.target.value)}
        style={{
          padding: '10px 14px',
          fontSize: '14px',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          outline: 'none',
          cursor: 'pointer',
          background: 'rgba(255,255,255,0.05)',
          color: 'white',
          fontWeight: '500',
          transition: 'all 0.2s'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#3b82f6'
          e.target.style.background = 'rgba(59, 130, 246, 0.1)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'rgba(255,255,255,0.1)'
          e.target.style.background = 'rgba(255,255,255,0.05)'
        }}
      >
        <option value="date_desc">📅 Date (Newest First)</option>
        <option value="quantity">📊 Quantity</option>
        <option value="name_asc">👤 Name (A-Z)</option>
      </select>
    </div>
  )
}
