import { FC } from 'react'
import PasswordField from './components/PasswordField'

const Content: FC = () => (
  <div className="flex justify-center items-center bg-white w-[640px] h-[832px]  ">
    <div className="relative text-left w-[280px] h-[270px]">
      <h1 className="text-[#1E1E1E] text-[22px] font-medium mb-[25px]">Set new Password</h1>
      <form action="/" method="post">
        <PasswordField />
      </form>
    </div>
  </div>
)

export default Content
