export interface PutReportPayload {
  Rego: string
  VIN: string
  Odometer: string
  FirstName: string
  LastName: string
}

export interface Report {
  title: string
  vehicle: string
  owner: string
  service: string
  createdAt: string
  description: string
  status: 'Pending' | 'In Progress' | 'Resolved'
  assignedTo: string
  attachments: string[]
  comments: string[]
}
