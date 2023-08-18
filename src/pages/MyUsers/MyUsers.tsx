import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardDoubleArrowLeft, MdLogout } from 'react-icons/md'
import CompanyLayout from '@/layouts/UserLayout/UserLayout'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { getMyUsers, sendInviteEmial } from '@/services/user'
import { User } from '@/interfaces/user'
import Button, { Size, Variant } from '@/components/Button'
import { logout } from '@/features/auth/authSlice'

const MyUsers: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [email, setEmail] = useState<string>('')

  const getUsers: () => Promise<void> = async () => {
    const res = await getMyUsers()
    setUsers(res.data)
  }

  const getAccountUrl = (): string => {
    const currentURL = new URL(window.location.href)
    const hostnameParts = currentURL.hostname.split('.')
    if (hostnameParts.length > 2) {
      hostnameParts[0] = process.env.REACT_APP_MAIN_HOST || 'www'
    }
    currentURL.hostname = hostnameParts.join('.')
    currentURL.pathname = ''
    currentURL.search = ''
    currentURL.hash = `/account`
    return currentURL.toString()
  }

  useEffect(() => {
    if (!user) {
      navigate(getAccountUrl())
    } else {
      getUsers()
    }
  }, [user, navigate])

  if (user === null) {
    return null
  }

  const handleSendEmial = async (): Promise<void> => {
    await sendInviteEmial(email)
    await getUsers()
    setEmail('')
  }

  const handleLogout = (): void => {
    dispatch(logout())
    navigate('/')
  }

  const handleBack = (): void => {
    window.location.href = getAccountUrl()
  }

  return (
    <CompanyLayout>
      <div className="bg-userContent min-h-screen p-10 ">
        <h1 className="mb-5 text-2xl font-extrabold">Hi {user.tenant.name},</h1>
        <div className="bg-[#FFFFFF] rounded-lg p-10 w-[809px] h-[130px]">
          <div>
            <p className="inline-block">Name:</p>
            <p className="inline-block ml-20 text-darkGray">{user.tenant.name}</p>
          </div>
          <div>
            <p className="inline-block mt-5">Email:</p>
            <p className="inline-block ml-20 text-darkGray">{user.tenant.email}</p>
          </div>
        </div>
        <div className="mt-10 w-[808px] h-[72px] rounded-t-lg rounded-tr-lg">
          <div className="flex bg-[#F3F2F2] p-4 ">
            <h2 className="font-bold text-lg ml-2">User List</h2>
          </div>
          <div className="flex justify-between bg-[#F3F2F2]  p-4">
            <input
              type="text"
              className="w-[300px] h-[40px] rounded-lg shadow-mb border-b-2 px-3"
              value={email}
              placeholder="Add company's email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <button
              type="button"
              className="bg-orange-500 w-[150px] h-[30px] text-white text-center rounded-lg shadow-mb"
              onClick={handleSendEmial}
            >
              Send Invite Email
            </button>
          </div>
          <div className="flex gap-10 bg-white shadow-md rounded-lg p-20 mb-10">
            {users.map((u) => (
              <div key={u.email}>
                <span>{u.email}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="w-56 mt-20">
              <Button variant={Variant.Primary} size={Size.Default} block onClick={handleBack}>
                <MdKeyboardDoubleArrowLeft size={25} className="inline-flex mr-2" />
                Back to Company List
              </Button>
            </div>
            <div className="w-32 mt-20">
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

export default MyUsers
