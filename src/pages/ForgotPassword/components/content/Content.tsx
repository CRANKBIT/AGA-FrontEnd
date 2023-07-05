import { FC } from 'react'
import Button, { Variant } from '@/components/Button'

const Content: FC = () => (
  <>
    <div className="text-2xl mb-6">Forgot Password?</div>
    <div className="text-darkGray">Please enter your email address to reset your password</div>
    <div>
      <div className="my-14">
        <div className="text-2xl">Email :</div>
        <input
          type="text"
          placeholder="example@abc.com.."
          className="border w-full rounded p-2 mt-1 focus:outline-none"
        />
      </div>
      <Button variant={Variant.Primary} className="w-[280px] h-[50px]">
        Reset
      </Button>
    </div>
  </>
)
export default Content
