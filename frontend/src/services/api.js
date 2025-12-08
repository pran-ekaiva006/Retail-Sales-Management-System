import axios from 'axios'

// Use environment variable for API URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000, // Increase to 60 seconds for Render free tier
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export async function fetchSales(params, retries = 2) {
  try {
    console.log('API Request params:', params)
    console.log('API Base URL:', API_BASE_URL)
    
    const response = await api.get('/sales', { params })
    console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    // If timeout and retries remaining, try again
    if (error.code === 'ECONNABORTED' && retries > 0) {
      console.log(`Request timed out. Retrying... (${retries} attempts left)`)
      await new Promise(resolve => setTimeout(resolve, 2000)) // Wait 2 seconds
      return fetchSales(params, retries - 1)
    }
    
    const errorMessage = error.response?.data?.error || error.message || 'Failed to fetch sales data'
    throw new Error(errorMessage)
  }
}
