import { FC, useState, useEffect, FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import AuthLayout from '@/layouts/AuthLayout'
import { loginUser } from '@/features/auth/authSlice'

const Login: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        navigate('/account')
      }, 2000)

      return () => clearTimeout(timer)
    }

    return undefined
  }, [user, navigate])

  const handleLogin = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)
    await dispatch(
      loginUser({
        email,
        password,
      })
    )

    navigate('/account')
    setIsLoading(false)
  }

  return (
    <AuthLayout>
      <div className="bg-userContent min-h-screen flex justify-center items-center w-full">
        <div className="w-[280px]">
          <form onSubmit={handleLogin}>
            <div>
              <p>Email</p>
              <input
                className="box-border w-full h-11 mb-6 border border-background rounded placeholder-shown:border-gray-500 pl-2"
                type="email"
                placeholder="Alonso@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <p>Password</p>
              <input
                className="box-border w-full h-11 mb-4 border border-background rounded placeholder-shown:border-gray-500 pl-2"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/auth/login/reset-password" className="text-darkgray text-sm block mb-3">
              Forget Password?
            </Link>

            <button
              type="submit"
              className="w-[280px] h-[50px] hover:bg-sky-700 text-white bg-primary text-4.5 leading-5 font-bold rounded-[5px] mt-3"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="flex justify-between items-center my-3">
            <hr className="w-28" />
            or
            <hr className="w-28" />
          </div>
          <div className="flex justify-center mb-2 relative">
            <button
              type="button"
              className="block text-center text-[#5E5E5E] w-[280px] h-[50px] rounded-md bg-white border-[#03111B] border-2"
            >
              Sign in with Google
            </button>
            <img className="absolute left-6 top-4" src="/svg/googleIcon.svg" alt="" />
          </div>
          <div className="mt-20">
            <span className="text-richBlack mr-[5px]">Do not have an Account?</span>

            <Link to="/auth/signup/create-account" className="text-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
