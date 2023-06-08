import { axiosClient as api } from '../utils/axios'
import { PutReportPayload } from '../interfaces/Report'
export const putReportApi = (putReportPayload: PutReportPayload) =>
  api.post('/report', putReportPayload)
