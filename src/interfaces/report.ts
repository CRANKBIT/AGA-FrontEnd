export interface IVehicle {
  make: string
  model: string
  rego: string
  year: number
  odo: number
  customername:string
}
export interface Report {
  title: string
  vehicle: IVehicle
  service: string[]
  createdAt: string
  attachments: string[]
  comments: string[]
}
