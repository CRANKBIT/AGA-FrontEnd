import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Button } from '@mui/material'

const Login = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // TODO: bind form input value later
  const handleLogin = () => {
    const user = {
      email,
      password,
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
      <input
        type="text"
        onChange={(e) => {
          console.log(e)
          return setEmail(e.target.value)
        }}
        value={email}
      />
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <Button variant="text" onClick={handleLogin}>
        Login
      </Button>
    </div>
  )
}

export default Login
