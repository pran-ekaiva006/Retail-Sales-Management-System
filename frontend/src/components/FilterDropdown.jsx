import React from 'react'
import useStore from '../utils/store.js'

const FilterDropdown = ({ label }) => (
  <button style={{
    padding: '8px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    background: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
    fontWeight: '400'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = '#9ca3af'
    e.currentTarget.style.color = '#374151'
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderColor = '#d1d5db'
    e.currentTarget.style.color = '#6b7280'
  }}
  >
    <span>{label}</span>
    <span style={{ fontSize: '10px' }}>▼</span>
  </button>
)

export default function Filters(){
  const handleReset = () => {
    window.location.reload()
  }
  
  return (
    <>
      {/* Refresh Button */}
      <button style={{
        width: '36px',
        height: '36px',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: '#ffffff',
        transition: 'all 0.2s',
        padding: 0
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = '#9ca3af'
        e.currentTarget.style.background = '#f9fafb'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = '#d1d5db'
        e.currentTarget.style.background = '#ffffff'
      }}
      onClick={handleReset}
      title="Refresh"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </svg>
      </button>

      {/* Filter Dropdowns */}
      <FilterDropdown label="Customer Region" />
      <FilterDropdown label="Gender" />
      <FilterDropdown label="Age Range" />
      <FilterDropdown label="Product Category" />
      <FilterDropdown label="Tags" />
      <FilterDropdown label="Payment Method" />
      <FilterDropdown label="Date" />
    </>
  )
}