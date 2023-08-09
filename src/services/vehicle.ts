import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { Vehicle } from '@/interfaces/vehicle'

export const createVehicle = (vehicle: Vehicle): Promise<AxiosResponse> =>
  api('/vehicle', {
    method: 'POST',
    data: vehicle,
  })

export const getVehicles = (): Promise<AxiosResponse> =>
  api('/vehicle', {
    method: 'GET',
  })

export const getVehicleById = (id: number): Promise<AxiosResponse> =>
  api(`/vehicle/${id}`, {
    method: 'GET',
  })

export const updateVehicleById = (id: number, vehicle: Vehicle): Promise<AxiosResponse> =>
  api(`/vehicle/${id}`, {
    method: 'PUT',
    data: vehicle,
  })

export const deleteVehicleById = (id: number): Promise<AxiosResponse> =>
  api(`/vehicle/${id}`, {
    method: 'DELETE',
  })
