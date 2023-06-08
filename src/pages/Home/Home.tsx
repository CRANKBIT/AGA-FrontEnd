import { useAppSelector } from '@/app/hooks'
import Layout from '@/layouts/Layout'
import Container from '@/layouts/Container'
import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import Pricing from '@/components/Pricing/Pricing'

const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <Layout>
      <Container>
        {!user && (
          <div>
            Please{' '}
            <a href="/auth/signup" className="font-bold">
              register
            </a>{' '}
            or{' '}
            <a href="/auth/login" className="font-bold">
              login
            </a>
          </div>
        )}
        <Hero />
        <Features />
        <Pricing />
      </Container>
    </Layout>
  )
}

export default Home
