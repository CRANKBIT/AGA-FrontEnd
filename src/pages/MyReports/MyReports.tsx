import { FC } from 'react'
import SideNav from '@/components/SideNav/SideNav'
import Container from '@/layouts/Container/Container'
import PageContent from '@/components/PageContent/PageContent'
import Content from './components/Content/Content'

const MyReports: FC = () => (
  <Container>
    <div className="flex text-xl min-h-[832px]">
      <SideNav />
      <PageContent>
        <Content />
      </PageContent>
    </div>
  </Container>
)

export default MyReports
