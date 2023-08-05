import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { Report } from '@/interfaces/report'

export const createReportApi = (report: Report): Promise<AxiosResponse> => api.post('/report/createReport', report)

export const getReportByIdApi = (id: number): Promise<AxiosResponse> => api.get(`/report/${id}`)

export const getReports = (): Promise<AxiosResponse> => api.get(`/report`)
