/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getUserFromLocalStorage } from './localStorage'

const backendHttpInstance = (): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create()
  axiosInstance.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:8080/api/v1'

  const user = getUserFromLocalStorage()
  if (user) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`
  }

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      console.error(error.response)
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

const api = (endpoint: string, config: AxiosRequestConfig) => {
  const axiosInstance: AxiosInstance = backendHttpInstance()
  return axiosInstance(endpoint, config)
}

export default api
