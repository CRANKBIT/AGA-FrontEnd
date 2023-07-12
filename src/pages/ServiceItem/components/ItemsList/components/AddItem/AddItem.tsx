import { FC } from 'react'

const AddItem: FC = () => (
  <div className="flex items-center mt-3">
    <div>
      <textarea className="w-[440px] h-[42px] rounded-lg shadow-lg px-2 " placeholder="Add more item here.." />
    </div>
    <button className="bg-black text-white p-2 shadow-lg rounded-lg mx-8" type="button">
      Add
    </button>
  </div>
)

export default AddItem
