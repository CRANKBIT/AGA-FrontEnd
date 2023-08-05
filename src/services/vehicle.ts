import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { Vehicle } from '@/interfaces/vehicle'

export const createVehicle = (vehicle: Vehicle): Promise<AxiosResponse> => api.post('/vehicle', vehicle)

export const getVehicles = (): Promise<AxiosResponse> => api.get('/vehicle')

export const getVehicleById = (id: number): Promise<AxiosResponse> => api.get(`/vehicle/${id}`)

export const updateVehicleById = (id: number, vehicle: Vehicle): Promise<AxiosResponse> =>
  api.put(`/vehicle/${id}`, vehicle)

export const deleteVehicleById = (id: number): Promise<AxiosResponse> => api.put(`/vehicle/${id}`)
