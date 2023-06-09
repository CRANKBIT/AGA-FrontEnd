import { useAppSelector } from '@/app/hooks'
import Layout from '@/layouts/Layout'
import Container from '@/layouts/Container'
import { Link } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'

const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <Layout>
      <Container >
        {!user ? (
          <div>
            Please{' '}
            <Link to="/auth/signup" className="font-bold">
              register
            </Link>{' '}
            or{' '}
            <Link to="/auth/login" className="font-bold">
              login
            </Link>
          </div>
        ) : (
          <>you logged in</>
        )}
      <Hero/>
      <Features/>
      <Pricing/>
      </Container>
    </Layout>
  )
}

export default Home
