import Layout from '@/layouts/Layout'
import Container from '@/layouts/Container'
import Upperbox from './components/Upperbox/Upperbox'
import Lowerbox from './components/Lowerbox/Lowerbox'

const Contact = () => {
  return (
    <Layout>
      <Container>
        <>
          <Upperbox />
          <Lowerbox />
        </>
      </Container>
    </Layout>
  )
}

export default Contact
