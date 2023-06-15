import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import AuthLayout from '@/layouts/AuthLayout'
import Button, { Variant } from '@/components/Button'

const SignUp: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const handleSignUpWithEmail = (): void => {
    navigate('/auth/signup/create-account')
  }

  // NOTE: for temporary testing
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
        navigate('/account')
      }, 1500)
    }
  }, [user, navigate])

  return (
    <AuthLayout>
      <div className="px-44 py-80">
        <div className="text-xl font-medium mb-5">Get started</div>

        <Button variant={Variant.Primary} className="font-bold w-72" onClick={handleRegister}>
          Continue with Google
        </Button>

        <div className="flex justify-between items-center my-3">
          <hr className="w-28" />
          or
          <hr className="w-28" />
        </div>

        <Button variant={Variant.PrimaryOutline} className="font-bold w-72" onClick={handleSignUpWithEmail}>
          Sign up with email
        </Button>
      </div>
    </AuthLayout>
  )
}

export default SignUp
