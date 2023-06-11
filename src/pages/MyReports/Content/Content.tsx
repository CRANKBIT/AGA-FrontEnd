import { BiFile } from 'react-icons/bi'
import ReportList from './components/ReportList'
import { CiSearch } from 'react-icons/ci'

export default function Content() {
  const buttonClassNames =
    'w-[250px] h-[90px] bg-[#03111B] hover:bg-[#007AD3] text-white rounded-md'

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="inline-block font-bold">My Reports</div> {'(12)'}
        </div>
        <div>
          <div className="p-[5px] flex items-center justify-between border border-black bg-white rounded w-[250px] px-[5px]">
            <input placeholder="Search.." className="focus:outline-none" />
            <CiSearch />
          </div>
        </div>
      </div>
      <div className="flex gap-6 mt-[50px]">
        <button className={buttonClassNames}>
          <div className="flex justify-center items-center gap-2">
            <BiFile className="text-4xl" /> <div>+ New Report</div>
          </div>
        </button>
        <button className={buttonClassNames}>Browse Templates</button>
        <button className={buttonClassNames}>Report History</button>
      </div>
      <ReportList />
    </div>
  )
}
