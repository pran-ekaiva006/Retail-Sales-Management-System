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
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{fontSize: '14px', color: 'rgba(255,255,255,0.5)'}}>
        Page {page} of {totalPages}
      </div>
      <div style={{display: 'flex', gap: '8px'}}>
        <button 
          disabled={page <= 1}
          onClick={() => setParam('page', page - 1)}
          style={{
            padding: '10px 20px',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            background: page <= 1 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
            color: page <= 1 ? 'rgba(255,255,255,0.3)' : 'white',
            cursor: page <= 1 ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            if (page > 1) {
              e.target.style.background = 'rgba(59, 130, 246, 0.2)'
              e.target.style.borderColor = '#3b82f6'
            }
          }}
          onMouseOut={(e) => {
            e.target.style.background = page <= 1 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)'
            e.target.style.borderColor = 'rgba(255,255,255,0.1)'
          }}
        >
          ← Previous
        </button>
        <button 
          disabled={page >= totalPages}
          onClick={() => setParam('page', page + 1)}
          style={{
            padding: '10px 20px',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            background: page >= totalPages ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
            color: page >= totalPages ? 'rgba(255,255,255,0.3)' : 'white',
            cursor: page >= totalPages ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            if (page < totalPages) {
              e.target.style.background = 'rgba(59, 130, 246, 0.2)'
              e.target.style.borderColor = '#3b82f6'
            }
          }}
          onMouseOut={(e) => {
            e.target.style.background = page >= totalPages ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)'
            e.target.style.borderColor = 'rgba(255,255,255,0.1)'
          }}
        >
          Next →
        </button>
      </div>
    </div>
  )
}
