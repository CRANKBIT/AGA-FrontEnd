import SideNav from '@/components/SideNav/SideNav'
import Content from './components/Content/Content'

export default function KnowledgeBase() {
  return (
    <div className="flex w-[1280px] h-full text-xl">
      <SideNav />
      <Content />
    </div>
  )
}
