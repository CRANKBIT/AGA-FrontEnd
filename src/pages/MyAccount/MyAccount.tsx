import { FC, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import CompanyLayout from '@/layouts/UserLayout/UserLayout'
import { useAppSelector } from '@/app/hooks'
import { createCompany, getMyCompanies } from '@/services/company'
import { Company } from '@/interfaces/company'

const MyAccount: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()
  const [companies, setCompanies] = useState<Company[]>([])
  const [companyName, setCompanyName] = useState<string>('')
  const getCompanies: () => Promise<void> = async () => {
    const res = await getMyCompanies()
    setCompanies(res.data)
  }

  useEffect(() => {
    if (!user) {
      navigate('/auth/login')
    } else {
      getCompanies()
    }
  }, [user, navigate])

  if (user === null) {
    return null
  }

  const handleAddCompany = async (): Promise<void> => {
    await createCompany({
      domain: companyName,
    })
    getCompanies()
  }

  const getCompanyUrl = (domain: string): string => {
    const currentURL = new URL(window.location.href)
    const hostnameParts = currentURL.hostname.split('.')
    if (hostnameParts.length > 2) {
      hostnameParts[0] = domain
    }
    currentURL.hostname = hostnameParts.join('.')
    return currentURL.toString()
  }

  return (
    <CompanyLayout>
      <div className="bg-userContent min-h-screen p-10 ">
        <h1 className="mb-4">Hi {user.tenant.name},</h1>
        <div className="bg-white rounded-lg p-10">
          <div>
            <p className="inline-block">Name:</p>
            <p className="inline-block ml-20">{user.tenant.name}</p>
          </div>
          <div>
            <p className="inline-block">Email:</p>
            <p className="inline-block ml-20">{user.tenant.email}</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex space-around bg-gray p-8">
            <h2 className="text-bold text-lg">Company List</h2>
          </div>
          <div className="flex space-around bg-gray p-4">
            <input
              type="text"
              className="w-[200px] h-[30px] rounded-lg shadow-mb"
              onChange={(e) => {
                setCompanyName(e.target.value)
              }}
            />
            <button
              type="button"
              className="bg-black w-[200px] h-[30px] text-white text-center ml-[500px] rounded-lg shadow-mb"
              onClick={handleAddCompany}
            >
              Add New Company
            </button>
          </div>

          <div className="flex gap-10 bg-white shadow-md rounded-lg p-20">
            {companies.map((company) => (
              <Link to={getCompanyUrl(company.domain)} key={company.domain}>
                <img src="./svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
                <span>{company.domain}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </CompanyLayout>
  )
}

export default MyAccount
