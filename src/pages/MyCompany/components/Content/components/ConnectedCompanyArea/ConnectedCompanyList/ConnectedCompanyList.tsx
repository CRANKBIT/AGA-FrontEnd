import { FC, useState, useEffect } from 'react'
import axios from '@/utils/axios'
import MockData from './CompanyItem/assets/MockData'
import CompanyItem from './CompanyItem'

const ConnectedCompanyList: FC = () => {
  const [tenantId, setTenantId] = useState('')
  const [companyData, setCompanyData] = useState([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(`/api/v1/companies/${tenantId}`)
        const { companies } = response.data

        setCompanyData(companies)
        console.log(companies)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [tenantId])

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setTenantId(JSON.parse(userData)?.userData.tenant.tenantId || '')
    }
  }, [])

  return (
    <div>
      <div className="w-[808px] h-[47px] flex items-center border-b border-richBlack border-opacity-20">
        <span className="text-[14px] text-richBlack font-medium opacity-70 w-[510px] ml-16">Company Name</span>
        <span className="text-[14px] text-richBlack font-medium opacity-70">Owner</span>
      </div>
      {/* TODO: need to replace the MockData with companyData */}
      {MockData.map((item) => (
        <CompanyItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ConnectedCompanyList
