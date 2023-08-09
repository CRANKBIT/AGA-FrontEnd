import { FC } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Link } from 'react-router-dom'
import Button, { Variant } from '@/components/Button'

interface Props {
  setClose: () => void
}
const Modal: FC<Props> = ({ setClose }) => (
  <div className="fixed top-0 left-0 bottom-0 right-0 bg-background/40 flex items-center justify-center z-50">
    <div className="rounded-[10px] w-[494px] h-[569px] pt-5 bg-white shadow-md border border-background/40">
      <div className="text-end">
        <CloseRoundedIcon
          onClick={() => {
            setClose()
          }}
          className="cursor-pointer mb-6 mr-5 w-10 h-10"
        />
      </div>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <div className="px-[87px]">
          <h2 className="text-[22px] font-semibold text-textColorBlack">My Profile</h2>
          <div className="pt-8">
            <p className="text-[16px] leading-5 font-semibold">Full Name</p>
            <input
              className="box-border text-sm font-normal pl-[10px] w-[320px] h-[40px] mb-[18px] mt-[4px] border border-richBlack rounded-[5px] placeholder-shown:border-gray-500"
              name="updatedFullName"
            />
          </div>
          <div>
            <p className="text-[16px] leading-5 font-semibold">Phone</p>
            <input
              className="box-border text-sm font-normal pl-[10px] w-[320px] h-[40px] mb-3 mt-[4px] border border-richBlack rounded-[5px] placeholder-shown:border-gray-500"
              name="updatedPhoneNumber"
            />
          </div>
          <div className="mb-3">
            <Link to="/auth/login/forgot-password" className="text-base text-primary border-b">
              Change Password
            </Link>
          </div>
          <Button variant={Variant.Primary} type="submit" className="w-[320px] h-[40px] mt-2">
            {' '}
            <div className="text-large font-bold"> Update Changes</div>{' '}
          </Button>
          <hr className=" text-richBlack my-6 relative]" />
          <Button variant={Variant.PrimaryOutline} type="button" className="w-[320px] h-[40px]">
            {' '}
            <div className="text-large font-bold"> Logout</div>{' '}
          </Button>
          <div className="flex justify-center mt-4">
            <Link to="." className="text-base text-[#FF887B] border-b">
              Request to Close Account
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
)

export default Modal
