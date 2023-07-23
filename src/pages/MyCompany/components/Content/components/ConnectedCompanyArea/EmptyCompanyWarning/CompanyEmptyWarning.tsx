import { FC } from 'react'
import WarningIcon from './assets/WarningIcon.svg'

const CompanyEmptyWarning: FC = () => (
  <div className="flex justify-center items-center h-[337px]">
    <div className="w-[293px] h-[54px] bg-[#E74C3C] bg-opacity-30 flex items-center justify-between rounded-md">
      <img src={WarningIcon} alt="Warning Icon" className="ml-3" />
      <span className="text-base mr-3">You need to add company first</span>
    </div>
  </div>
)

export default CompanyEmptyWarning
