import React, { useState } from 'react'
import useStore from '../utils/store.js'

const FilterDropdown = ({ label, options, value, onChange, isMulti = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState(value ? value.split(',') : [])

  const handleSelect = (option) => {
    if (isMulti) {
      let newValues
      if (selectedValues.includes(option)) {
        newValues = selectedValues.filter(v => v !== option)
      } else {
        newValues = [...selectedValues, option]
      }
      setSelectedValues(newValues)
      onChange(newValues.join(','))
    } else {
      setSelectedValues([option])
      onChange(option)
      setIsOpen(false)
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px 14px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          background: '#ffffff',
          cursor: 'pointer',
          fontSize: '13px',
          color: selectedValues.length > 0 ? '#374151' : '#6b7280',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          whiteSpace: 'nowrap',
          transition: 'all 0.15s',
          fontWeight: selectedValues.length > 0 ? '600' : '400'
        }}
      >
        <span>
          {selectedValues.length > 0 
            ? `${label} (${selectedValues.length})` 
            : label}
        </span>
        <span style={{ fontSize: '9px', color: '#9ca3af' }}>▼</span>
      </button>

      {isOpen && (
        <>
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
            onClick={() => setIsOpen(false)}
          />
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '4px',
            background: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            minWidth: '200px',
            maxHeight: '300px',
            overflowY: 'auto',
            zIndex: 1000
          }}>
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                style={{
                  padding: '10px 14px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: '#374151',
                  background: selectedValues.includes(option) ? '#f3f4f6' : 'transparent',
                  fontWeight: selectedValues.includes(option) ? '600' : '400',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background 0.15s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#f9fafb'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = selectedValues.includes(option) ? '#f3f4f6' : 'transparent'
                }}
              >
                {isMulti && (
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option)}
                    onChange={() => {}}
                    style={{ marginRight: '4px' }}
                  />
                )}
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const DateRangeFilter = () => {
  const { params, setParam } = useStore()
  const [isOpen, setIsOpen] = useState(false)
  const [startDate, setStartDate] = useState(params.startDate || '')
  const [endDate, setEndDate] = useState(params.endDate || '')
  const [error, setError] = useState('')

  const applyDateRange = () => {
    // Validate date range
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      setError('Start date must be before or equal to end date')
      return
    }
    
    setError('')
    if (startDate) setParam('startDate', startDate)
    if (endDate) setParam('endDate', endDate)
    setIsOpen(false)
  }

  const hasValue = params.startDate || params.endDate

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px 14px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          background: '#ffffff',
          cursor: 'pointer',
          fontSize: '13px',
          color: hasValue ? '#374151' : '#6b7280',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          whiteSpace: 'nowrap',
          fontWeight: hasValue ? '600' : '400'
        }}
      >
        <span>{hasValue ? 'Date (Selected)' : 'Date'}</span>
        <span style={{ fontSize: '9px', color: '#9ca3af' }}>▼</span>
      </button>

      {isOpen && (
        <>
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
            onClick={() => setIsOpen(false)}
          />
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '4px',
            background: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '16px',
            minWidth: '280px',
            zIndex: 1000
          }}>
            {error && (
              <div style={{
                padding: '8px 12px',
                background: '#fee2e2',
                color: '#dc2626',
                borderRadius: '4px',
                fontSize: '12px',
                marginBottom: '12px'
              }}>
                {error}
              </div>
            )}
            
            <div style={{ marginBottom: '12px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '12px', 
                color: '#6b7280', 
                marginBottom: '6px',
                fontWeight: '600'
              }}>
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value)
                  setError('')
                }}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}
              />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '12px', 
                color: '#6b7280', 
                marginBottom: '6px',
                fontWeight: '600'
              }}>
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value)
                  setError('')
                }}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}
              />
            </div>
            <button
              onClick={applyDateRange}
              style={{
                width: '100%',
                padding: '8px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Apply
            </button>
          </div>
        </>
      )}
    </div>
  )
}

const AgeRangeFilter = () => {
  const { params, setParam } = useStore()
  const [isOpen, setIsOpen] = useState(false)
  const [ageMin, setAgeMin] = useState(params.ageMin || '')
  const [ageMax, setAgeMax] = useState(params.ageMax || '')
  const [error, setError] = useState('')

  const applyAgeRange = () => {
    // Validate age range
    const min = ageMin ? parseInt(ageMin) : null
    const max = ageMax ? parseInt(ageMax) : null
    
    if (min !== null && max !== null && min > max) {
      setError('Min age must be less than or equal to Max age')
      return
    }
    
    if (min !== null && (min < 0 || min > 150)) {
      setError('Age must be between 0 and 150')
      return
    }
    
    if (max !== null && (max < 0 || max > 150)) {
      setError('Age must be between 0 and 150')
      return
    }
    
    setError('')
    if (ageMin) setParam('ageMin', ageMin)
    if (ageMax) setParam('ageMax', ageMax)
    setIsOpen(false)
  }

  const hasValue = params.ageMin || params.ageMax

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px 14px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          background: '#ffffff',
          cursor: 'pointer',
          fontSize: '13px',
          color: hasValue ? '#374151' : '#6b7280',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          whiteSpace: 'nowrap',
          fontWeight: hasValue ? '600' : '400'
        }}
      >
        <span>{hasValue ? `Age (${ageMin || '0'}-${ageMax || '100'})` : 'Age Range'}</span>
        <span style={{ fontSize: '9px', color: '#9ca3af' }}>▼</span>
      </button>

      {isOpen && (
        <>
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
            onClick={() => setIsOpen(false)}
          />
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '4px',
            background: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '16px',
            minWidth: '240px',
            zIndex: 1000
          }}>
            {error && (
              <div style={{
                padding: '8px 12px',
                background: '#fee2e2',
                color: '#dc2626',
                borderRadius: '4px',
                fontSize: '12px',
                marginBottom: '12px'
              }}>
                {error}
              </div>
            )}
            
            <div style={{ marginBottom: '12px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '12px', 
                color: '#6b7280', 
                marginBottom: '6px',
                fontWeight: '600'
              }}>
                Min Age
              </label>
              <input
                type="number"
                value={ageMin}
                onChange={(e) => {
                  setAgeMin(e.target.value)
                  setError('')
                }}
                placeholder="18"
                min="0"
                max="150"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}
              />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '12px', 
                color: '#6b7280', 
                marginBottom: '6px',
                fontWeight: '600'
              }}>
                Max Age
              </label>
              <input
                type="number"
                value={ageMax}
                onChange={(e) => {
                  setAgeMax(e.target.value)
                  setError('')
                }}
                placeholder="65"
                min="0"
                max="150"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}
              />
            </div>
            <button
              onClick={applyAgeRange}
              style={{
                width: '100%',
                padding: '8px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Apply
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default function Filters(){
  const { params, setParam } = useStore()

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
        transition: 'all 0.15s',
        padding: 0,
        flexShrink: 0
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = '#9ca3af'
        e.currentTarget.style.backgroundColor = '#f3f4f6'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = '#d1d5db'
        e.currentTarget.style.backgroundColor = '#ffffff'
      }}
      onClick={handleReset}
      title="Refresh"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </svg>
      </button>

      {/* Filter Dropdowns */}
      <FilterDropdown 
        label="Customer Region" 
        options={['North', 'South', 'East', 'West']}
        value={params.regions}
        onChange={(value) => setParam('regions', value)}
        isMulti={true}
      />
      
      <FilterDropdown 
        label="Gender" 
        options={['Male', 'Female']}
        value={params.gender}
        onChange={(value) => setParam('gender', value)}
        isMulti={true}
      />
      
      <AgeRangeFilter />
      
      <FilterDropdown 
        label="Product Category" 
        options={['Electronics', 'Fashion', 'Beauty', 'Clothing', 'Home']}
        value={params.categories}
        onChange={(value) => setParam('categories', value)}
        isMulti={true}
      />
      
      <FilterDropdown 
        label="Tags" 
        options={['New', 'Sale', 'Featured', 'Trending']}
        value={params.tags}
        onChange={(value) => setParam('tags', value)}
        isMulti={true}
      />
      
      <FilterDropdown 
        label="Payment Method" 
        options={['Card', 'Cash', 'UPI', 'Net Banking']}
        value={params.paymentMethods}
        onChange={(value) => setParam('paymentMethods', value)}
        isMulti={true}
      />
      
      <DateRangeFilter />
    </>
  )
}