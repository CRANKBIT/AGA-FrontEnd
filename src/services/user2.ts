import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { User2 } from '@/interfaces/user2'

export const createUser = (user: User2): Promise<AxiosResponse> => api.post('/user', user)

export const getUsers = (): Promise<AxiosResponse> => api.get('/user')

export const getUserById = (id: number): Promise<AxiosResponse> => api.get(`/user/${id}`)

export const updateUserById = (id: number, user: User2): Promise<AxiosResponse> => api.put(`/user/${id}`, user)

export const deleteUserById = (id: number): Promise<AxiosResponse> => api.put(`/user/${id}`)
