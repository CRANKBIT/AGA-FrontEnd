import { BiFile } from 'react-icons/bi'
import SideNavList from './components/SideNavList'

export default function SideNav() {
  return (
    <div className="bg-background w-[305px] text-white h-screen flex justify-center">
      <div className="pt-[55px]">
        <div className="pb-8 text-3xl">
          <BiFile className="inline-block text-blue-600 mr-2"></BiFile>
          <span className="text-2xl">Report Builder</span>
        </div>
        <div className="pb-8 leading-10">
          <SideNavList />
        </div>
        <div className="leading-9">
          <div>My Profile</div>
          <div className="text-sm text-[#7C7C81]">Logout</div>
        </div>
      </div>
    </div>
  )
}
