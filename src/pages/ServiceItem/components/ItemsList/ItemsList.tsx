import { FC, useState } from 'react'
import Item from './components/Item'
import AddItem from './components/AddItem'

const initItems = []

const ItemsList: FC = () => {
  const [items, setItems] = useState(initItems)

  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="text-lg font-bold">Service Items</h2>
        <div className="w-[320px] h-[1px] bg-[#03111B] mx-auto" />
      </div>
      <div>
        <Item />
      </div>
      <div>
        <AddItem />
      </div>
    </div>
  )
}
export default ItemsList
