import { FC } from 'react'
import SideNav from '@/components/SideNav/SideNav'
import Container from '@/layouts/Container/Container'
import PageContent from '@/components/PageContent/PageContent'
import ContactPage from './components/ContactPage/ContactPage'
import Table from './components/ContactPage/components/Table'
import QAHeader from './components/ContactPage/components/Table/components/QAHeader'

const HelpSupport: FC = () => (
  <Container>
    <div className="flex text-xl min-h-[832px]">
      <SideNav />
      <PageContent>
        <QAHeader />
        <Table />
        <ContactPage />
      </PageContent>
    </div>
  </Container>
)

export default HelpSupport
