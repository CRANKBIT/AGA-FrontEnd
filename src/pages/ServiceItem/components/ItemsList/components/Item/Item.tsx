import { FC } from 'react'

interface Props {
  service: string
  deleteHandler: () => void
}

const Item: FC<Props> = ({ service, deleteHandler }) => (
  <div className="flex items-center mb-3">
    <div className="w-[440px] h-[42px] bg-white rounded-lg shadow-lg flex items-center px-2">{service}</div>
    <button className="mx-2" type="button" onClick={deleteHandler}>
      <img src="/svg/ServiceItemDelete.svg" alt="delete" />
    </button>
    <button className="bg-blue-700 text-white p-2 shadow-lg rounded-lg" type="button">
      Edit
    </button>
  </div>
)
export default Item
