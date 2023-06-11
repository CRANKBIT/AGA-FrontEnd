import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { logout } from '@/features/auth/authSlice'
import Layout from '@/layouts/Layout'
import Container from '@/layouts/Container'

const Home: FC = () => {
  const { user } = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch()

  const handleLogout = (): void => {
    dispatch(logout())
  }

  return (
    <Layout>
      <Container>
        {!user ? (
          <div className="text-white">
            {'Please '}
            <Link to="/auth/signup" className="font-bold">
              register
            </Link>
            {' or '}
            <Link to="/auth/login" className="font-bold">
              login
            </Link>
            <Link to="/knowledge-base" className="font-bold">
              {' KnowledgePage '}
            </Link>
            <Link to="/my-reports" className="font-bold">
              My-report
            </Link>
          </div>
        ) : (
          <>
            <div>Welcome, you have logged in</div>
            <Button type="button" variant="contained" onClick={handleLogout}>
              logout
            </Button>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Home
