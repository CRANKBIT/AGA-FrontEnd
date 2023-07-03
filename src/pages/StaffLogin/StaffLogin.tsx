import { FC } from 'react'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import Login from './components/Login'
import ThirdPartyLogin from './components/ThirdPartyLogin/ThirdPartyLogin'

const StaffLogin: FC = () => (
  <AuthLayout>
    <div className="py-80 bg-white w-[640px] flex justify-center">
      <div className="w-[280px] h-[356px]">
        <Login />
        <ThirdPartyLogin />
      </div>
    </div>
  </AuthLayout>
)
export default StaffLogin
