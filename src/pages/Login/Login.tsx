import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

const Login = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // TODO: bind form input value later
  const handleLogin = () => {
    const user = {
      email: 'john@gmail.com',
      password: 'password123',
    }

    dispatch(loginUser(user))
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 1500)
    }
  }, [user, navigate])

  return (
    <div>
      <Link to="/auth/login">
        <button onClick={handleLogin} className="text-white">
          Login
        </button>
      </Link>
    </div>
  )
}

export default Login
