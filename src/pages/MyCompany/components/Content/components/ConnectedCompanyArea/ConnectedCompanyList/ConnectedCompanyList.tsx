import { FC } from 'react'
import MockData from './CompanyItem/assets/MockData'
import CompanyItem from './CompanyItem'

const ConnectedCompanyList: FC = () => (
  <div>
    <div className="w-[808px] h-[47px] flex items-center border-b border-richBlack border-opacity-20">
      <span className="text-[14px] text-richBlack font-medium opacity-70 w-[356px] ml-[31px]">Company Name</span>
      <span className="text-[14px] text-richBlack font-medium opacity-70 w-[169px]">Key</span>
      <span className="text-[14px] text-richBlack font-medium opacity-70 w-[110px]">Type</span>
      <span className="text-[14px] text-richBlack font-medium opacity-70 w-[91px]">Lead</span>
    </div>
    {MockData.map((item) => (
      <CompanyItem key={item.id} {...item} />
    ))}
  </div>
)

export default ConnectedCompanyList
