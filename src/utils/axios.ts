import axios from 'axios'
import { getTenantFromLocalStorage } from './localStorage'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:8080',
})

axiosClient.interceptors.request.use((config) => {
  const tenant = getTenantFromLocalStorage()
  if (tenant) {
    // eslint-disable-next-line no-param-reassign
    config.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  return config
})

export default axiosClient
