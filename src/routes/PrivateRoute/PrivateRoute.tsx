import { FC, useEffect, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/app/hooks'
import getSubdomain from '@/utils/subdomain'

interface Props {
  children: ReactElement
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const { user, isLoading } = useAppSelector((state) => state.auth)

  useEffect(() => {
    const subdomain = getSubdomain()
    console.log(subdomain)
    if (subdomain === process.env.REACT_APP_MAIN_HOST) {
      if (!user) {
        navigate('/auth/login')
      }
    } else {
      navigate('/')
    }
  }, [user, navigate])

  if (isLoading) {
    return <>Loading...</>
  }

  return children
}

export default PrivateRoute
