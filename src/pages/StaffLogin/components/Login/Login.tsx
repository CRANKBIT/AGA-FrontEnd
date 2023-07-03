import { FC } from 'react'

const Login: FC = () => (
  <div>
    <h1 className="text-textColorBlack text-2xl mb-5 font-medium">Log in</h1>
    <p className="font-medium">User name or email</p>
    <input className="box-border pl-[3px] w-[280px] h-11 mb-6 border border-background rounded-[5px] placeholder-shown:border-gray-500" type="email" />
    <p className="font-medium">Password</p>
    <input className="box-border pl-[3px] w-[280px] h-11 mb-6 border border-background rounded-[5px] placeholder-shown:border-gray-500" type="password" />
    <button type="button">forget password?</button>
    <button type="button">Log in </button>
  </div>
)

export default Login
