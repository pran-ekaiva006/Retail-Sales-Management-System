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
      padding: '20px 24px',
      borderTop: '1px solid #f0f0f0'
    }}>
      <div style={{fontSize: '14px', color: '#757575'}}>
        Page {page} of {totalPages}
      </div>
      <div style={{display: 'flex', gap: '8px'}}>
        <button 
          disabled={page <= 1}
          onClick={() => setParam('page', page - 1)}
          style={{
            padding: '8px 18px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            background: page <= 1 ? '#fafafa' : '#ffffff',
            color: page <= 1 ? '#ccc' : '#424242',
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
            padding: '8px 18px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            background: page >= totalPages ? '#fafafa' : '#ffffff',
            color: page >= totalPages ? '#ccc' : '#424242',
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