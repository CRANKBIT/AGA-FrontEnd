import HelloWorld from '../../components/HelloWorld'
import { useAppSelector } from '../../app/hooks'
import Layout from 'src/pages/Layout'
import Container from '../../components/Container'

const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  if (!user)
    return (
      <Layout>
        <Container>
          <div className="bg-background min-h-screen text-slate-50">
            Please <a href="/auth/signup">register</a> or <a href="/auth/login">login</a>
          </div>
        </Container>
      </Layout>
    )

  return (
    <Layout>
      <Container>
        <HelloWorld
          box={{
            sx: {
              background: 'rgb(0, 30, 60)',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
          text="hello-world"
        />
      </Container>
    </Layout>
  )
}

export default Home
