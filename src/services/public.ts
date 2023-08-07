import { AxiosResponse } from 'axios'
import api from '@/utils/axios'

const checkSubDomain = (domain: string): Promise<AxiosResponse> =>
  api('/checkSubDomain', {
    method: 'POST',
    data: domain,
  })

  export default checkSubDomain
