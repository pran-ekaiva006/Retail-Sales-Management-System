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
    <div style={{
      position: 'relative',
      width: '300px'
    }}>
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#9ca3af" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input 
        placeholder="Name, Phone no." 
        value={localSearch} 
        onChange={(e) => setLocalSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{
          width: '100%',
          padding: '8px 12px 8px 38px',
          fontSize: '14px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          outline: 'none',
          background: '#ffffff',
          color: '#374151',
          transition: 'all 0.2s'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#9ca3af'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#d1d5db'
        }}
      />
    </div>
  )
}