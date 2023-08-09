import { AxiosResponse } from 'axios'
import api from '@/utils/axios'

const checkSubDomain = (domain: string): Promise<AxiosResponse> =>
  api(`/checkSubDomain/${domain}`, {
    method: 'GET',
  })

export default checkSubDomain
