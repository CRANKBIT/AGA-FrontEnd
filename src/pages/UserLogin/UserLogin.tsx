import { FC } from 'react'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import Input from '@/components/Input'
import Button from '@/components/Button'

const UserLogin: FC = () => (
  <AuthLayout>
    <div className="py-80 bg-white w-[640px] flex justify-center justify-items-center">
      <div className="w-[280px] h-screen">
        <div>
          <h1 className="text-textColorBlack text-2xl mb-5 font-medium">Log in</h1>
          <p className="font-medium">User name or email</p>
          <Input type="email" placeholder="john@mail.com" />
          <p className="font-medium">Password</p>
          <Input type="password" placeholder="******************" />
          <button type="button" className="text-gray block mb-2">
            Forget Password?
          </button>
          <div className="flex justify-center">
            <Button className="text-center w-[250px] h-10 bg-hover">
              <div>Log in</div>
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <hr className="w-28" />
          or
          <hr className="w-28" />
        </div>
        <div className="flex justify-center mb-2">
          <Button className="block text-center w-[250px] h-10 bg-hover">Google</Button>
        </div>
        <div className="flex justify-center mb-2">
          <Button className="block text-center w-[250px] h-10 bg-hover">Microsoft</Button>
        </div>
        <div className="flex justify-center mb-2">
          <Button className="block text-center w-[250px] h-10 bg-hover">Apple</Button>
        </div>
      </div>
    </div>
  </AuthLayout>
)
export default UserLogin
