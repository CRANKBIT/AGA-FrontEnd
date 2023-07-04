import { FC } from 'react'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import Input from '@/components/Input'

const UserLogin: FC = () => (
  <AuthLayout>
    <div className="py-80 bg-white w-[640px] flex justify-center">
      <div className="w-[280px] h-[356px]">
        <div>
          <h1 className="text-textColorBlack text-2xl mb-5 font-medium">Log in</h1>
          <p className="font-medium">User name or email</p>
          <Input type="email" placeholder="john@mail.com" />
          <p className="font-medium">Password</p>
          <Input type="password" placeholder="******************" />
          <button type="button">forget password?</button>
          <button type="button">Log in </button>
        </div>
        <div className="flex justify-between items-center my-3">
          <hr className="w-28" />
          or
          <hr className="w-28" />
        </div>
        <div>
          <button type="button">google</button>
          <button type="button">microsoft</button>
          <button type="button">Apple</button>
        </div>
      </div>
    </div>
  </AuthLayout>
)
export default UserLogin
