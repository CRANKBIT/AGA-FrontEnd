import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { RegisterPayload, LoginPayload } from '@/interfaces/auth'

export const registerApi = (registerPayload: RegisterPayload): Promise<AxiosResponse> =>
  api('/tenant/register', {
    method: 'POST',
    data: registerPayload,
  })

export const loginApi = (loginPayload: LoginPayload): Promise<AxiosResponse> =>
  api('/tenant/login', {
    method: 'POST',
    data: loginPayload,
  })
