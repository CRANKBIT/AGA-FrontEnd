import { AxiosError } from 'axios'

export interface User {
  tenant: {
    userId: string
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
  user: User | null
  isError: boolean
  error?: AxiosError | Error
}
