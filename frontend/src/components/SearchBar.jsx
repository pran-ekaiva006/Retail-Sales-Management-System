import React, { useState } from 'react'
import useStore from '../utils/store.js'

export default function SearchBar(){
  const { params, setParam } = useStore()
  const [localSearch, setLocalSearch] = useState(params.search)
  
  const handleSearch = () => {
    setParam('search', localSearch)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  
  return (
    <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
      <div style={{position: 'relative', flex: 1}}>
        <span style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '20px'
        }}>
          🔍
        </span>
        <input 
          placeholder="Search by customer name or phone number..." 
          value={localSearch} 
          onChange={(e) => setLocalSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            width: '100%',
            padding: '14px 16px 14px 48px',
            fontSize: '15px',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            outline: 'none',
            transition: 'all 0.2s',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
        />
      </div>
      <button
        onClick={handleSearch}
        style={{
          padding: '14px 32px',
          background: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap'
        }}
        onMouseOver={(e) => e.target.style.background = '#5568d3'}
        onMouseOut={(e) => e.target.style.background = '#667eea'}
      >
        🔎 Search
      </button>
    </div>
  )
}