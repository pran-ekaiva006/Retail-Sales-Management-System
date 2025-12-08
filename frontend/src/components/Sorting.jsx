import React from 'react'
import useStore from '../utils/store.js'

export default function Sorting(){
  const { params, setParam } = useStore()
  
  return (
    <select 
      value={params.sort || 'date_desc'}
      onChange={(e) => setParam('sort', e.target.value)}
      style={{
        padding: '10px 36px 10px 14px',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        background: '#ffffff',
        cursor: 'pointer',
        fontSize: '14px',
        color: '#6b7280',
        outline: 'none',
        appearance: 'none',
        fontWeight: '400',
        minWidth: '240px',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center'
      }}
    >
      <option value="date_desc">Sort by: Date (Newest First)</option>
      <option value="name_asc">Sort by: Customer Name (A-Z)</option>
      <option value="quantity">Sort by: Quantity</option>
    </select>
  )
}