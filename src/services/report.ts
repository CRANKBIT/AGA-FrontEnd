import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { Report } from '@/interfaces/report'

export const createReportApi = (report: Report): Promise<AxiosResponse> =>
  api('/report/createReport', {
    method: 'POST',
    data: report,
  })

export const getReports = (): Promise<AxiosResponse> =>
  api('/report', {
    method: 'GET',
  })

export const getReportByIdApi = (id: number): Promise<AxiosResponse> =>
  api(`/report/${id}`, {
    method: 'GET',
  })

export const updateReportApi = (report: Report): Promise<AxiosResponse> =>
  api('/report', {
    method: 'PUT',
    data: report,
  })

export const deleteReportApi = (id: number): Promise<AxiosResponse> =>
  api(`/report/${id}`, {
    method: 'DELETE',
  })
