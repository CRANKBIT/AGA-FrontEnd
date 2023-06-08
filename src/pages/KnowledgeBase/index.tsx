import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Content from './components/Content/Content'

export default function KnowledgeBase() {
  return (
    <div className="flex w-[1280px] h-full text-xl">
      <NavigationBar />
      <Content />
    </div>
  )
}
