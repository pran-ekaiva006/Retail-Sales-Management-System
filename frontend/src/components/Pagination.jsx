import React from 'react'
import useStore from '../utils/store.js'

export default function Pagination(){
  const { data, setParam } = useStore()
  const { page, totalPages } = data
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      marginTop: '20px',
      borderTop: '1px solid #e5e7eb'
    }}>
      <div style={{fontSize: '14px', color: '#6b7280'}}>
        Page {page} of {totalPages}
      </div>
      <div style={{display: 'flex', gap: '8px'}}>
        <button 
          disabled={page <= 1}
          onClick={() => setParam('page', page - 1)}
          style={{
            padding: '8px 16px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: page <= 1 ? '#f9fafb' : 'white',
            color: page <= 1 ? '#9ca3af' : '#374151',
            cursor: page <= 1 ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
        >
          ← Previous
        </button>
        <button 
          disabled={page >= totalPages}
          onClick={() => setParam('page', page + 1)}
          style={{
            padding: '8px 16px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: page >= totalPages ? '#f9fafb' : 'white',
            color: page >= totalPages ? '#9ca3af' : '#374151',
            cursor: page >= totalPages ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
        >
          Next →
        </button>
      </div>
    </div>
  )
}
