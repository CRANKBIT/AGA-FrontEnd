import HelloWorld from '../../components/HelloWorld'
import { useAppSelector } from '../../app/hooks'
import Layout from 'src/pages/Layout'

const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  if (!user)
    return (
      <Layout>
        <h3>
          Please <a href="/auth/signup">register</a> or <a href="/auth/login">login</a>
        </h3>
      </Layout>
    )

  return (
    <Layout>
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
    </Layout>
  )
}

export default Home
