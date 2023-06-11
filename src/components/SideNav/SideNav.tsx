import { FC } from 'react'
import { BiFile } from 'react-icons/bi'
import SideNavList from './components/SideNavList'

const SideNav: FC = () => (
  <div className="bg-background w-[305px] text-white h-100vh ">
    <div className="pt-[55px] w-full">
      <div className="cursor-pointer pb-8 text-3xl pl-[56px]">
        <BiFile className="inline-block text-blue-600 mr-2" />
        <span className="text-2xl">Report Builder</span>
      </div>
      <div className="pb-8 leading-10 ">
        <SideNavList />
      </div>
      <div className="cursor-pointer leading-9 pl-[60px]">
        <div>My Profile</div>
        <div className="text-sm text-[#7C7C81]">Logout</div>
      </div>
      <div className="w-full" />
    </div>
  </div>
)

export default SideNav
