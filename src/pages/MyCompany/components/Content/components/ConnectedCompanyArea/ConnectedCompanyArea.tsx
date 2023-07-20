import { FC } from 'react'
import CompanyEmptyWarning from './EmptyCompanyWarning/CompanyEmptyWarning'
import ConnectedCompanyList from './ConnectedCompanyList/ConnectedCompanyList'
import MockData from './ConnectedCompanyList/CompanyItem/assets/MockData'

const ConnectedCompanyItems: FC = () => (
  <div className="relative">
    <div className="mx-auto w-[808px] h-[337px] bg-white overflow-y-auto">
      {MockData.length ? <ConnectedCompanyList /> : <CompanyEmptyWarning />}
    </div>
    {MockData.length && (
      <div className="w-[251px] h-8 bg-slate-400 absolute left-[641px] top-[360px]">Pagination Area</div>
    )}
  </div>
)

export default ConnectedCompanyItems
