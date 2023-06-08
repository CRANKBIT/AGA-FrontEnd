import { FC, ReactNode } from 'react'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
