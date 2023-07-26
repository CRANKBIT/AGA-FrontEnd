import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  companyName: string
  owner: string
}

const CompanyItem: FC<Props> = ({ companyName, owner }) => (
  <div className="w-[808px] h-[58px] flex items-center border-b bg-white border-richBlack border-opacity-20">
    <span className="w-16 flex justify-center">
      <input type="checkbox" id={companyName} name={companyName} />
    </span>
    <span className="w-[510px]">
      <Link to="." className="text-[16px] text-primary font-semibold">
        {companyName}
      </Link>
    </span>
    <span className="w-[160px]">
      <Link to="." className="text-[16px] text-primary font-semibold border-b">
        {owner}
      </Link>
    </span>
  </div>
)

export default CompanyItem
