import React from 'react'
import useStore from '../utils/store.js'

export default function Sorting(){
  const { params, setParam } = useStore()
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px'
    }}>
      <span style={{fontSize: '14px', color: '#6b7280', fontWeight: '500'}}>
        Sort by:
      </span>
      <select 
        value={params.sort || 'date_desc'}
        onChange={(e) => setParam('sort', e.target.value)}
        style={{
          padding: '8px 12px',
          fontSize: '14px',
          border: '2px solid #e5e7eb',
          borderRadius: '8px',
          outline: 'none',
          cursor: 'pointer',
          background: 'white',
          color: '#374151',
          fontWeight: '500'
        }}
      >
        <option value="date_desc">📅 Date (Newest First)</option>
        <option value="quantity">📊 Quantity</option>
        <option value="name_asc">👤 Name (A-Z)</option>
      </select>
    </div>
  )
}
