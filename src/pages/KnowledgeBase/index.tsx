import SideNav from '@/components/SideNav'
import Content from './components/Content/Content'
import Container from '@/layouts/Container/Container'

export default function KnowledgeBase() {
  return (
    <div>
      <Container>
        <div className="flex text-xl min-h-[832px]]">
          <SideNav />
          <Content />
        </div>
      </Container>
    </div>
  )
}
