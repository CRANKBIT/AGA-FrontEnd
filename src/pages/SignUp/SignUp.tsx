import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import AuthLayout from '@/layouts/AuthLayout'

const SignUp: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // TODO: Use actual form value in the future, this is test only, and please remove in database
  const handleRegister = (): void => {
    const testUser = {
      name: 'John Doe',
      email: 'john@gmail.com',
      password: 'password123',
    }

    dispatch(registerUser(testUser))
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/user')
      }, 1500)
    }
  }, [user, navigate])

  return (
    <AuthLayout>
      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </AuthLayout>
  )
}

export default SignUp
