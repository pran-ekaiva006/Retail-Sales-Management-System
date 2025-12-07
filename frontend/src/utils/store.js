import { create } from 'zustand'
import { fetchSales } from '../services/api.js'

const useStore = create((set, get) => ({
  params: {
    search: '',
    regions: '',
    gender: '',
    ageMin: '',
    ageMax: '',
    categories: '',
    tags: '',
    paymentMethods: '',
    startDate: '',
    endDate: '',
    sort: 'date_desc',
    page: 1
  },
  data: { items: [], page: 1, totalPages: 1, total: 0 },
  loading: false,
  error: null,

  setParam(key, value) {
    set(state => ({
      params: { 
        ...state.params, 
        [key]: value, 
        page: key === 'page' ? value : 1 
      }
    }))
    get().fetchData()
  },

  async fetchData() {
    set({ loading: true, error: null })
    try {
      const params = get().params
      const cleanParams = {}
      
      // Only include non-empty parameters
      Object.entries(params).forEach(([key, value]) => {
        // Skip empty strings, null, undefined
        if (value === '' || value === null || value === undefined) {
          return
        }
        
        // Validate age fields are numbers
        if ((key === 'ageMin' || key === 'ageMax')) {
          const num = Number(value)
          if (!isNaN(num) && num > 0) {
            cleanParams[key] = num
          }
          return
        }
        
        // Always include sort and page
        if (key === 'sort' || key === 'page') {
          cleanParams[key] = value
          return
        }
        
        // Include other non-empty values
        cleanParams[key] = value
      })

      console.log('Fetching with params:', cleanParams)
      const responseData = await fetchSales(cleanParams)
      console.log('Received data:', responseData)
      
      // Normalize the response
      const normalizedData = {
        items: Array.isArray(responseData.items) ? responseData.items : [],
        page: parseInt(responseData.page) || 1,
        totalPages: parseInt(responseData.totalPages) || 1,
        total: parseInt(responseData.total) || 0
      }
      
      set({ 
        data: normalizedData, 
        loading: false 
      })
    } catch (error) {
      console.error('Fetch error:', error)
      set({ 
        error: error.message || 'Failed to load data',
        loading: false,
        data: { items: [], page: 1, totalPages: 1, total: 0 }
      })
    }
  }
}))

// Initialize on first load
useStore.getState().fetchData()

export default useStore
