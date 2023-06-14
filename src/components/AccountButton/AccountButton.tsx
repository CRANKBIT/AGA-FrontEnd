import { FC } from 'react'
import Button from '@/components/Button'

type InputProps = {
  text: string
  backgroundColor: string
  textColor: string
}

const AccountButton: FC<InputProps> = ({ text, backgroundColor, textColor }) => (
  <div className="w-full flex items-center justify-center">
    <Button
      className={` bg-[${backgroundColor}] w-full border border-[#007AD3] rounded-[5px] py-[14px] font-bold text-base text-[1.125rem] text-[${textColor}] leadding-[1.375rem]`}
      type="submit"
    >
      {text}
    </Button>
  </div>
)

export default AccountButton