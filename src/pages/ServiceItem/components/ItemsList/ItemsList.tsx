import { FC, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Item from './components/Item'
import AddItem from './components/AddItem'

const initItems = [
  {
    id: uuid(),
    service: 'Check wipers',
  },
  {
    id: uuid(),
    service: 'Check all lights',
  },
  {
    id: uuid(),
    service: 'Check all fluids level',
  },
  {
    id: uuid(),
    service: 'Check drive belt',
  },
  {
    id: uuid(),
    service: 'Check battery',
  },
  {
    id: uuid(),
    service: 'Check tyres',
  },
  {
    id: uuid(),
    service: 'Check brakes',
  },
  {
    id: uuid(),
    service: 'Check suspension',
  },
  {
    id: uuid(),
    service: 'Replace oil filter and oli',
  },
  {
    id: uuid(),
    service: 'Rotated wheels',
  },
  {
    id: uuid(),
    service: 'Road test',
  },
]

const ItemsList: FC = () => {
  const [items, setItems] = useState(initItems)
  const deleteHandler = (id: string): void => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="text-lg font-bold">Service Items</h2>
        <div className="w-[320px] h-[1px] bg-[#03111B] mx-auto" />
      </div>
      <div>
        {items.map((item) => (
          <Item key={item.id} service={item.service} deleteHandler={() => deleteHandler(item.id)} />
        ))}
      </div>
      <div>
        <AddItem />
      </div>
    </div>
  )
}
export default ItemsList
