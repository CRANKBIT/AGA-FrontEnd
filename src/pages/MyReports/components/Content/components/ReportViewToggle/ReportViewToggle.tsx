import { FC } from 'react'
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai'
import ListView from './components/ListView'

const ReportViewToggle: FC = () => (
  <div className="mb-[20px] items-center">
    <div className="flex my-2">
      <div className="w-2/6">
        <div className="text-gray-600">Reports</div>
      </div>
      <div className="w-2/6">
        <div className="text-gray-600">Last Updated</div>
      </div>
      <div className="w-1/6">
        <div className="text-gray-600">Tasks</div>
      </div>
      <div className="w-1/6 cursor-pointer text-end text-3xl">
        <AiOutlineAppstore className="p-[2px] inline-block bg-gray-300 rounded mr-1 hover:text-white hover:bg-blue-500" />
        <AiOutlineMenu className="p-[2px] inline-block bg-blue-500 rounded text-white border border-black" />
      </div>
    </div>
    <ListView />
  </div>
)

export default ReportViewToggle
