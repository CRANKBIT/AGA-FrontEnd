import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import UserLayout from '@/layouts/UserLayout/UserLayout'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { sendInviteEmial, getMyUsers } from '@/services/user'
import { User } from '@/interfaces/user'
import Button, { Variant, Size } from '@/components/Button'
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
    <UserLayout>
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
            <h2 className="text-bold text-lg">User List</h2>
          </div>
          <div className="flex space-around bg-gray p-4">
            <input
              type="text"
              className="w-[200px] h-[30px] rounded-lg shadow-mb"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <button
              type="button"
              className="bg-black w-[200px] h-[30px] text-white text-center ml-[500px] rounded-lg shadow-mb"
              onClick={handleSendEmial}
            >
              Send Invite Email
            </button>
          </div>

          <div className="flex gap-10 bg-white shadow-md rounded-lg p-20">
            {users.map((u) => (
              <div key={u.email}>
                <span>{u.email}</span>
              </div>
            ))}
          </div>

          <Button
            variant={Variant.Primary}
            size={Size.Large}
            style={{
              marginTop: '20px',
            }}
            block
            onClick={handleBack}
          >
            Back to Campany List
          </Button>
          <Button
            variant={Variant.PrimaryOutline}
            size={Size.Large}
            style={{
              marginTop: '20px',
            }}
            block
            onClick={handleLogout}
          >
            <MdLogout className="inline mr-2" size={18} />
            Logout
          </Button>
        </div>
      </div>
    </UserLayout>
  )
}

export default MyUsers
