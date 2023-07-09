import { AxiosError } from 'axios'

export interface Tenant {
  tenant: {
    tenantId: string
    name: string
    email: string
  }
  token: string
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface AuthState {
  isLoading: boolean
  isLoggedIn: boolean
  isError: boolean
  tenant: Tenant | null
  error?: AxiosError | Error
}
