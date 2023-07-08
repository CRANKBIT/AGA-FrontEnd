import axios, { AxiosResponse } from 'axios'
import { AuthState } from '@/types/auth'

const getAuthState = (): Promise<AxiosResponse<AuthState>> =>
  axios.get<AuthState>('/api/v1/tenant/is-logged-in').catch((error) => {
    console.error('Failed to fetch tenant login status:', error)
    throw error
  })

export default getAuthState
