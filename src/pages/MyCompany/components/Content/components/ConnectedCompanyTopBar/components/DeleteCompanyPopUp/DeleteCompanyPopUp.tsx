import { FC } from 'react'
import PopUp, { IconVariant } from '@/components/Popup/Popup'
import Button, { Variant } from '@/components/Button'

const DeleteCompanyPopUp: FC = () => (
  <PopUp variant={IconVariant.Form}>
    <h4 className="text-xl font-semibold text-center mt-12">Do you wish to delete selected company? </h4>
    <Button
      variant={Variant.Primary}
      type="submit"
      className="w-[140px] h-[35px] mt-16 flex items-center justify-center mx-auto"
    >
      {' '}
      <div className="text-base font-bold"> Confirm</div>{' '}
    </Button>
  </PopUp>
)

export default DeleteCompanyPopUp
