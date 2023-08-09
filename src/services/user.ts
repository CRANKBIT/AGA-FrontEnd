import { AxiosResponse } from 'axios'
import api from '@/utils/axios'

export const sendInviteEmial = (email: string): Promise<AxiosResponse> =>
  api(`/user/${encodeURIComponent(email)}`, {
    method: 'POST',
  })

export const getMyUsers = (): Promise<AxiosResponse> =>
  api('/user', {
    method: 'GET',
  })

export const deleteUserById = (id: number): Promise<AxiosResponse> =>
  api(`/user/${id}`, {
    method: 'DELETE',
  })
