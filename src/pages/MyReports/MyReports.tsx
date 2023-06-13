import { FC } from 'react'
import SideNav from '@/components/SideNavigationBar/SideNavigationBar'
import Container from '@/layouts/Container/Container'
import Content from './components/Content/Content'

const MyReports: FC = () => (
  <Container>
    <div className="flex text-xl min-h-[832px] h-screen">
      <SideNav />
      <Content />
    </div>
  </Container>
)

export default MyReports
