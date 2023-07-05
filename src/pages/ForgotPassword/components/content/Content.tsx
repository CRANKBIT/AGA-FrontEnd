import { FC } from 'react'
import Button, { Variant } from '@/components/Button'

const Content: FC = () => (
  <div className="py-60 w-[640px] flex items-center justify-center bg-white">
    <div className="w-[280px]">
      <div className="text-2xl mb-8">Forgot Password?</div>
      <div className="text-gray text-xs">Please enter your email address to reset your password</div>
      <div>
        <div className="my-14">
          Email
          <input type="text" placeholder="example@abc.com.." className="border w-full rounded p-2" />
        </div>
        <Button variant={Variant.Primary} className="w-[280px] h-[50px]">
          Reset
        </Button>
      </div>
    </div>
  </div>
)
export default Content
