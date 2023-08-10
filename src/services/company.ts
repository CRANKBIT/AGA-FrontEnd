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

export const deleteCompanyByDomain = (domain: string): Promise<AxiosResponse> =>
  api(`/company/${domain}`, {
    method: 'DELETE',
  })

// uncomment below 2 functions will cause Axios error

// export const deleteCompanyById = (id: string): Promise<AxiosResponse> =>
//   api(`/company/${id}`, {
//     method: 'DELETE'
//   })

// export const getCompanyIdByDomain = (domain: string): Promise<AxiosResponse> =>
//   api(`/company/${domain}`, {
//     method: 'GET'
//   })
