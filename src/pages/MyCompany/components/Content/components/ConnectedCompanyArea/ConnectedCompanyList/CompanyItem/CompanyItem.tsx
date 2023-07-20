import { FC } from 'react'
import { Link } from 'react-router-dom'
import RightArrow from './assets/RightArrow.svg'

interface Props {
  companyName: string
  companyKey: string
  type: string
  lead: string
}

const CompanyItem: FC<Props> = ({ companyName, companyKey, type, lead }) => (
  <div className="w-[808px] h-[58px] flex items-center border-b bg-white border-richBlack border-opacity-20">
    <span className="text-[16px] text-richBlack font-semibold w-[356px] ml-[31px]">{companyName}</span>
    <span className="text-[16px] text-richBlack font-semibold w-[169px]">{companyKey}</span>
    <span className="text-[16px] text-richBlack font-semibold w-[110px]">{type}</span>
    <span className="w-[91px]">
      <Link to="." className="border-b text-[16px] text-primary font-semibold">
        {lead}
      </Link>
    </span>
    <span className="w-[48px]">
      <Link to="." className="border-b text-[16px] text-primary font-semibold">
        <img src={RightArrow} alt="RightArrow" />
      </Link>
    </span>
  </div>
)

export default CompanyItem
