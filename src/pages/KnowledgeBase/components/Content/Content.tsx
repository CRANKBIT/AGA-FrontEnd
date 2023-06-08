import ReusableList from './components/List/List'
import { CiSearch } from 'react-icons/ci'

export default function Content() {
  return (
    <div id="content" className="bg-[#E9EFF4] w-[975px] px-[200px] py-[55px]">
      <div className="text-2xl font-bold  mb-7">Knowledge Base</div>
      <div className="w-[340px] text-center text-xl mx-auto">
        Explore how our Form Report can work for you
      </div>
      <div className="flex border mt-5 mb-10 items-center gap-2  bg-white rounded pl-2">
        <CiSearch className="bg-white " />
        <input placeholder="Search…" className=" w-full focus:outline-none" />
      </div>
      <ReusableList />
    </div>
  )
}
