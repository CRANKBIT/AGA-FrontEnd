import { FC } from 'react'
import CardItem from './components/CardItem'

interface VehicleData {
  report: string
  lastUpdated: string
  taskNumber: number
  id: string
}

interface Props {
  currentItem: VehicleData[]
}
const CardView: FC<Props> = ({currentItem}) => (
  <div className="grid grid-cols-3 gap-3 gap-y-10 overflow-y-scroll max-h-screen">
    {currentItem.map((item) => (
      <CardItem key={item.id} {...item} />
    ))}
  </div>
)
export default CardView
