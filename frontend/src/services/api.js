import axios from 'axios'

// Use environment variable for API URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
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

export async function fetchSales(params) {
  try {
    console.log('API Request params:', params)
    console.log('API Base URL:', API_BASE_URL)
    const response = await api.get('/sales', { params })
    console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message || 'Failed to fetch sales data'
    throw new Error(errorMessage)
  }
}
