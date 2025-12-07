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
          fontSize: '20px',
          color: 'rgba(255,255,255,0.4)'
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
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            outline: 'none',
            transition: 'all 0.2s',
            boxSizing: 'border-box',
            background: 'rgba(255,255,255,0.05)',
            color: 'white'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3b82f6'
            e.target.style.background = 'rgba(59, 130, 246, 0.1)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(255,255,255,0.1)'
            e.target.style.background = 'rgba(255,255,255,0.05)'
          }}
        />
      </div>
      <button
        onClick={handleSearch}
        style={{
          padding: '14px 32px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-2px)'
          e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)'
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)'
          e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)'
        }}
      >
        🔎 Search
      </button>
    </div>
  )
}