import { FC } from 'react'
import { CiSearch } from 'react-icons/ci'
import PopUp, { IconVariant } from '@/components/Popup/Popup'
import Button, { Variant } from '@/components/Button'

const AddCompanyPopUp: FC = () => (
  <PopUp variant={IconVariant.Form}>
    <h4 className="text-xl font-semibold text-center mt-4">Add a New Company</h4>
    <div className="w-[247px]">
      <h6 className="text-base font-medium mt-4 mb-3">Company Name</h6>
    </div>
    <div className="flex items-center border border-black rounded w-[247px] px-2">
      <input className="w-[200px] h-[30px] focus:outline-none text-sm" />
      <CiSearch />
    </div>
    <div className="flex justify-end">
      <Button variant={Variant.Primary} type="button" className="w-[85px] h-[35px] mt-14">
        {' '}
        <div className="text-base font-bold"> Save</div>{' '}
      </Button>
    </div>
  </PopUp>
)

export default AddCompanyPopUp
