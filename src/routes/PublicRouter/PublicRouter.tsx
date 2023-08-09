import { FC, useEffect, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/app/hooks'
import getSubdomain from '@/utils/subdomain'

interface Props {
  children: ReactElement
}

const PublicRoute: FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const { user, isLoading } = useAppSelector((state) => state.auth)

  useEffect(() => {
    const subdomain = getSubdomain()
    if (subdomain === process.env.REACT_APP_MAIN_HOST) {
      if (!user) {
        navigate('/')
      }
    }
  }, [user, navigate])

  if (isLoading) {
    return <>Loading...</>
  }

  return children
}

export default PublicRoute
