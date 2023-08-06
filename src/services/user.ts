import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { User } from '@/interfaces/user'

export const createUser = (user: User): Promise<AxiosResponse> =>
  api('/user', {
    method: 'POST',
    data: user,
  })

export const getUsers = (): Promise<AxiosResponse> =>
  api('/user', {
    method: 'GET',
  })

export const getUserById = (id: number): Promise<AxiosResponse> =>
  api(`/user/${id}`, {
    method: 'GET',
  })

export const updateUserById = (id: number, user: User): Promise<AxiosResponse> =>
  api(`/user/${id}`, {
    method: 'PUT',
    data: user,
  })

export const deleteUserById = (id: number): Promise<AxiosResponse> =>
  api(`/user/${id}`, {
    method: 'DELETE',
  })
