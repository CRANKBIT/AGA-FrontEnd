import { FC } from 'react'
import dummyList from './assets/dummyList'
import CardItem from './components/CardItem/CardItem'

const CardView: FC = () => (
  <div className="grid grid-cols-3 gap-6">
    {dummyList.map((item) => (
      <CardItem key={item.id} {...item} />
    ))}
  </div>
)

export default CardView
