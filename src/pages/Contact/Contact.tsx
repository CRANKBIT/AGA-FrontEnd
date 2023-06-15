import Layout from '@/layouts/Layout'
import Container from '@/layouts/Container'
import UpperContainer from './components/UpperContainer/UpperContainer'
import LowerContainer from './components/LowerContainer/LowerContainer'
import { StyledEngineProvider } from '@mui/material'

const Contact = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Container>
          <UpperContainer />
          <LowerContainer />
        </Container>
      </Layout>
    </StyledEngineProvider>
  )
}

export default Contact
