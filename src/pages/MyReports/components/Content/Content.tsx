import { FC } from 'react'
import { BiFile } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import ReportList from './components/ReportList'

const Content: FC = () => (
  <div>
    <div className="flex justify-between">
      <div>
        <div className="inline-block font-bold">My Reports</div>
        (12)
      </div>
      <div>
        <div className="p-[5px] flex items-center justify-between border border-black bg-white rounded w-[250px] px-[5px]">
          <input placeholder="Search.." className="focus:outline-none" />
          <CiSearch />
        </div>
      </div>
    </div>
    <div className="flex gap-6 mt-[50px]">
      <Button className="w-[250px] h-[90px] hover:bg-[#007AD3]">
        <div className="flex justify-center items-center gap-2">
          <BiFile className="text-4xl" />
          <div>+ New Report</div>
        </div>
      </Button>
      <Button className="w-[250px] h-[90px] hover:bg-[#007AD3]">Browse Templates</Button>
      <Button className="w-[250px] h-[90px] hover:bg-[#007AD3]">Report History</Button>
    </div>
    <ReportList />
  </div>
)

export default Content
