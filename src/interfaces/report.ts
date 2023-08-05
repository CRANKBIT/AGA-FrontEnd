export interface Report {
  title: string
  vehicle: any
  owner: string
  service: [string]
  createdAt: string
  description: string
  status: 'Pending' | 'In Progress' | 'Resolved'
  assignedTo: string
  attachments: string[]
  comments: string[]
}
