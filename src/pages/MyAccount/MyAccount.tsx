import { FC, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import TableViewIcon from '@mui/icons-material/TableView'
import { MdLogout } from 'react-icons/md'
import CompanyLayout from '@/layouts/UserLayout'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { createCompany, getMyCompanies, deleteCompanyByDomain } from '@/services/company'
import { Company } from '@/interfaces/company'
import { logout } from '@/features/auth/authSlice'
import Button, { Size, Variant } from '@/components/Button'

const MyAccount: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
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
    await getCompanies()
    setCompanyName('')
  }

  const handleLogout = (): void => {
    dispatch(logout())
    navigate('/')
  }

  const handleDeleteCompany = async (domain: string): Promise<void> => {
    await deleteCompanyByDomain(domain)
    getCompanies()
  }

  const getCompanyUrl = (domain: string): string => {
    const currentURL = new URL(window.location.href)
    const hostnameParts = currentURL.hostname.split('.')
    if (hostnameParts.length > 2) {
      hostnameParts[0] = domain
    }
    currentURL.hostname = hostnameParts.join('.')
    currentURL.pathname = ''
    currentURL.search = ''
    currentURL.hash = `/publicLogin/${encodeURIComponent(`/my-users`)}/${encodeURIComponent(
      localStorage.getItem('user') as string
    )}`
    return currentURL.toString()
  }

  return (
    <CompanyLayout>
      <div className="bg-userContent min-h-screen p-10 ">
        <h1 className="mb-5 text-2xl font-extrabold">Hi {user.tenant.name},</h1>
        <div className="bg-[#FFFFFF] rounded-lg p-10 w-[809px] h-[130px]">
          <div>
            <p className="inline-block ">Name:</p>
            <p className="inline-block ml-20 text-darkGray">{user.tenant.name}</p>
          </div>
          <div>
            <p className="inline-block mt-5">Email:</p>
            <p className="inline-block ml-20 text-darkGray">{user.tenant.email}</p>
          </div>
        </div>
        <div className="mt-20 w-[808px] h-[72px]">
          <div className="flex bg-[#F3F2F2] p-4 rounded-t-lg rounded-tr-lg">
            <span className="bg-blue-500 text-white">
              {' '}
              <TableViewIcon />
            </span>
            <div className="font-bold text-lg ml-2">Company List</div>
          </div>
          <div className="flex justify-between  bg-[#F3F2F2] p-4">
            <input
              type="text"
              className="rounded-lg w-[350px] h-[40px] shadow-mb border-b-2 px-3"
              placeholder="Add company's name"
              value={companyName}
              onChange={(e) => {
                const regex = /^[a-zA-Z0-9-]*$/
                if (!regex.test(e.target.value)) {
                  return
                }
                if (e.target.value.length > 10) {
                  return
                }
                setCompanyName(e.target.value)
              }}
            />

            <button
              type="button"
              className="bg-white w-[150px] h-[40px] ml-[50px] text-[#007AD3] rounded-lg shadow-mb"
              onClick={handleAddCompany}
            >
              <AddIcon
                style={{
                  color: 'darkgray',
                }}
              />
              <span className="text-sm"> Company</span>
            </button>
          </div>

          <div className="flex gap-10 bg-white shadow-md rounded-lg p-20">
            {companies.length ? (
              companies.map((company) => (
                <div key={company.domain} className="text-center text-xl font-bold flex-col w-[100px]">
                  <Link to={getCompanyUrl(company.domain)}>
                    <img src="./svg/CompanyOne.png" alt="Company Logo" className="rounded-[100px] block" />
                    <span>{company.domain}</span>
                  </Link>
                  <button
                    type="button"
                    className="border text-[13px] text-white font-semibold bg-orange-600 mt-12 w-24 h-7 rounded"
                    onClick={() => handleDeleteCompany(company.domain)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <div className="font-bold">No Company Added</div>
            )}
          </div>
          <div className="flex justify-end ">
            <div className="w-52 mt-20 text-lg font-bold">
              <Button variant={Variant.Primary} size={Size.Default} onClick={handleLogout} block>
                <MdLogout className="inline mr-2" size={18} />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CompanyLayout>
  )
}

export default MyAccount
