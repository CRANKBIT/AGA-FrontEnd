import { BiFile } from 'react-icons/bi'

export default function NavigationBar() {
  return (
    <div className="bg-[#03111b] w-[305px] text-[#FFFFFF]">
      <div className="mt-[55px] ml-[56px]">
        <div className=" gap-x-3 mb-8 text-3xl">
          <BiFile className="inline-block  text-blue-600 mr-2"></BiFile>
          <span className="text-2xl">Report Builder</span>
        </div>
        <div className="mb-8 leading-10 ">
          <ul>
            <li>My Reports</li>
            <li>Analytics</li>
            <li>Knowledge Base</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div className="leading-9">
          <div>My Profile</div>
          <div className="text-sm text-[#7C7C81]">Logout</div>
        </div>
      </div>
    </div>
  )
}
