import Login from '@/pages/Login'
import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  isLoggedIn: boolean
  children?: ReactNode
}

const PrivateRoute: FC<PrivateRouteProps> = ({ isLoggedIn, children }) => {
  const auth = isLoggedIn

  return auth ? (
    <>{children}</>
  ) : (
    <>
      <Login />
      <Navigate to="/" />
    </>
  )
}

export default PrivateRoute
