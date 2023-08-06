import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { Report } from '@/interfaces/report'

export const createReportApi = (report: Report): Promise<AxiosResponse> =>
  api('/report/createReport', {
    method: 'POST',
    data: report,
  })

export const getReportByIdApi = (id: number): Promise<AxiosResponse> =>
  api(`/report/${id}`, {
    method: 'GET',
  })

export const getReports = (): Promise<AxiosResponse> =>
  api('/report', {
    method: 'GET',
  })
