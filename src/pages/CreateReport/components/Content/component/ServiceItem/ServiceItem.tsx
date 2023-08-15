import { FC } from 'react'
import ItemsList from './components/ItemsList'

interface IVehicle {
  Year: string
  Make: string
  Model: string
  Rego: string
  Odometer: string
  CustomerName: string
}
interface Props {
  vehicleData: IVehicle
}
const ServiceItem: FC<Props> = ({ vehicleData }) => (
  <div className="bg-userContent px-20 min-h-screen">
    <div className="flex justify-center mt-[80px]">
      <ItemsList vehicleData={vehicleData} />
    </div>
  </div>
)
export default ServiceItem
