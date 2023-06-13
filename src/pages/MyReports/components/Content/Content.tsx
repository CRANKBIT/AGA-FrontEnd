import { FC } from 'react'
import { BiFile } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import ReportViewToggle from './components/ReportViewToggle'

const Content: FC = () => (
  <div className="overflow-y-scroll  bg-[#ffffff] pt-[55px] px-20">
    <div className="flex justify-between">
      <div className="font-bold">My Reports (12)</div>
      <div className="p-[5px] flex items-center border border-black bg-white rounded w-[250px] px-[5px]">
        <input placeholder="Search.." className="focus:outline-none" />
        <CiSearch />
      </div>
    </div>
    <div className="mt-[50px] flex gap-7">
      <Button className="w-[250px] h-[90px] hover:bg-[#007AD3]">
        <div className="">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <BiFile className="text-4xl inline mr-4" />+ New Report
        </div>
      </Button>
      <Button className="w-[250px] h-[90px] hover:bg-[#007AD3]">Browse Templates</Button>
      <Button className="w-[250px] h-[90px] hover:bg-[#007AD3]">Report History</Button>
    </div>
    <ReportViewToggle />
  </div>
)

export default Content
