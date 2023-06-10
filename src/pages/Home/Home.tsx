import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/app/hooks'
import Layout from '@/layouts/Layout'
import Container from '@/layouts/Container'

const Home: FC = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <Layout>
      <Container>
        {!user ? (
          <div>
            Please
            <Link to="/auth/signup" className="font-bold">
              register
            </Link>
            or
            <Link to="/auth/login" className="font-bold">
              login
            </Link>
          </div>
        ) : (
          <>you logged in</>
        )}
      </Container>
    </Layout>
  )
}

export default Home
