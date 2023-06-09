import { useAppSelector } from '@/app/hooks'
import Layout from '@/layouts/Layout'
import Container from '@/layouts/Container'

const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <Layout>
      <Container>
        {!user ? (
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
        ) : (
          <>you logged in</>
        )}
      </Container>
    </Layout>
  )
}

export default Home
