import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
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
    const response = await api.get('/sales', { params })
    console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message || 'Failed to fetch sales data'
    throw new Error(errorMessage)
  }
}
