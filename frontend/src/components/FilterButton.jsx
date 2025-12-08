import React from 'react'
import useStore from '../utils/store.js'

const FilterButton = ({ label }) => (
  <button style={{
    width: '100%',
    padding: '11px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    background: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#424242',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    transition: 'all 0.2s',
    fontWeight: '400',
    marginBottom: '12px'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = '#c0c0c0'
    e.currentTarget.style.background = '#f8f8f8'
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderColor = '#e0e0e0'
    e.currentTarget.style.background = '#ffffff'
  }}
  >
    <span>{label}</span>
    <span style={{ fontSize: '10px', color: '#999' }}>▼</span>
  </button>
)

export default function Filters(){
  const { params, setParam } = useStore()
  
  const handleReset = () => {
    // Reset all filters
    setParam('search', '')
    setParam('regions', '')
    setParam('gender', '')
    setParam('ageMin', '')
    setParam('ageMax', '')
    setParam('categories', '')
    setParam('tags', '')
    setParam('paymentMethods', '')
    setParam('startDate', '')
    setParam('endDate', '')
    setParam('page', 1)
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      position: 'sticky',
      top: '24px'
    }}>
      {/* Refresh Icon Button */}
      <div style={{
        width: '48px',
        height: '48px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: '#ffffff',
        transition: 'all 0.2s'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = '#c0c0c0'
        e.currentTarget.style.background = '#f8f8f8'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = '#e0e0e0'
        e.currentTarget.style.background = '#ffffff'
      }}
      onClick={handleReset}
      title="Refresh"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </svg>
      </div>

      {/* Filters Card */}
      <div style={{
        background: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <FilterButton label="Customer Region" />
        <FilterButton label="Gender" />
        <FilterButton label="Age Range" />
        <FilterButton label="Product Category" />
        <FilterButton label="Tags" />
        <FilterButton label="Payment Method" />
        <FilterButton label="Date" />
        
        {/* Reset Filters Button */}
        <button
          onClick={handleReset}
          style={{
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
          }}
          onMouseOver={e => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
          }}
          onMouseOut={e => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
          <span>Reset Filters</span>
        </button>
      </div>
    </div>
  )
}