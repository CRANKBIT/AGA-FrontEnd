import { FC, useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import axios from '@/utils/axios'

const Login: FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post('/api/v1/auth/login', {
        email,
        password,
      })

      const { token } = response.data

      window.localStorage.setItem('token', token)

      setMessage(response.data.msg)
      window.location.href = '/'
    } catch (error) {
      const errorMessage =
        (error as { response?: { data: { msg: string } } }).response?.data.msg || 'An unknown error occurred'
      setMessage(errorMessage)
    }

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
                className="box-border w-full h-11 mb-6 border border-background rounded placeholder-shown:border-gray-500"
                placeholder="  Alonso@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <p>Password</p>
              <input
                className="box-border w-full h-11 mb-6 border border-background rounded placeholder-shown:border-gray-500 pl-2"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-[280px] h-[50px] hover:bg-sky-700 text-white bg-[#007AD3] text-4.5 leading-5 font-bold rounded-[5px] mt-5"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            {message && <p>{message}</p>}
          </form>
          <button
            type="button"
            className="w-[280px] h-[50px] hover:bg-sky-700 text-white bg-[#007AD3] text-4.5 leading-5 font-bold rounded-[5px] mt-5"
            disabled={isLoading}
            onClick={() => navigate('/auth/login/reset-password')}
          >
            Forget Password
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
