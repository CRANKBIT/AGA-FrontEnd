import ReusableList from './components/List'
import { CiSearch } from 'react-icons/ci'

export default function Content() {
  return (
    <div className="bg-[#E9EFF4] w-full max-w-[975px] flex justify-center pt-[55px]">
      <div>
        <div className="text-2xl font-bold mb-7">Knowledge Base</div>
        <div className="w-[340px] text-center text-xl mx-auto">
          Explore how our Form Report can work for you
        </div>
        <div className="flex border border-black mt-5 mb-10 items-center gap-2 bg-white rounded px-2">
          <CiSearch className="bg-white " />
          <input placeholder="Search…" className="w-full focus:outline-none" />
        </div>
        <ReusableList />
      </div>
    </div>
  )
}
