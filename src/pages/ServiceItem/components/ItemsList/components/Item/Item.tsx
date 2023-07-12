import { FC } from 'react'

const Item: FC = () => (
  <div className="flex items-center">
    <div className="w-[440px] h-[42px] bg-white rounded-lg shadow-lg flex items-center px-2">Item</div>
    <button className="mx-2" type="button">
      <img src="/svg/ServiceItemDelete.svg" alt="delete" />
    </button>
    <button className="bg-blue-700 text-white p-2 shadow-lg rounded-lg" type="button">
      Edit
    </button>
  </div>
)
export default Item
