import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { Company } from '@/interfaces/company'

export const createCompany = (company: Company): Promise<AxiosResponse> =>
  api('/company', {
    method: 'POST',
    data: company,
  })

export const getMyCompanies = (): Promise<AxiosResponse> =>
  api('/company', {
    method: 'GET',
  })

export const deleteCompanyById = (id: number): Promise<AxiosResponse> =>
  api(`/company/${id}`, {
    method: 'DELETE',
  })
