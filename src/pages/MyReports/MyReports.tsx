import SideNav from '@/components/SideNav/SideNav'
import Container from '@/layouts/Container/Container'
import PageContent from '@/components/PageContent/PageContent'
import Content from './Content/Content'

export default function MyReports() {
  return (
    <Container>
      <div className="flex text-xl min-h-[832px]">
        <SideNav />
        <PageContent>
          <Content />
        </PageContent>
      </div>
    </Container>
  )
}
