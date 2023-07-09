import { AxiosError } from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'
import { loginApi, registerApi } from '@/services/tenant'
import { getTenantFromLocalStorage, addTenantToLocalStorage, removeTenantFromLocalStorage } from '@/utils/localStorage'

import { Tenant, RegisterPayload, LoginPayload, AuthState } from '@/types/auth'

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  tenant: getTenantFromLocalStorage(),
  isError: false,
}

export const registerTenant = createAsyncThunk<Tenant, RegisterPayload, { rejectValue: AxiosError }>(
  'auth/signup',
  async (registerPayload: RegisterPayload, { rejectWithValue }) => {
    try {
      const { data } = await registerApi(registerPayload)
      addTenantToLocalStorage(data)
      return data
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data ?? err)
      }
      throw err
    }
  }
)

export const loginTenant = createAsyncThunk<Tenant, LoginPayload, { rejectValue: AxiosError }>(
  'auth/login',
  async (loginPayload: LoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await loginApi(loginPayload)
      addTenantToLocalStorage(data)
      return data
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data ?? err)
      }
      throw err
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.tenant = null
      removeTenantFromLocalStorage()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerTenant.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerTenant.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.tenant = payload
      })
      .addCase(registerTenant.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        state.error = payload
      })
      .addCase(loginTenant.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginTenant.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.tenant = payload
      })
      .addCase(loginTenant.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        state.error = payload
      })
  },
})

export const { logout } = authSlice.actions

export const selectAuth = (state: RootState): AuthState => state.auth

export default authSlice.reducer
