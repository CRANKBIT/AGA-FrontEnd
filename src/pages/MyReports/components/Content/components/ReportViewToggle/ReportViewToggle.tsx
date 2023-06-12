import { FC, useState } from 'react'
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai'
import ListView from './components/ListView'
import CardView from './components/CardView'

const ReportViewToggle: FC = () => {
  const [viewMode, SetViewMode] = useState<'list' | 'card'>('list')

  const handleCardView = (): undefined => {
    SetViewMode('card')
    return undefined
  }

  const handleListView = (): undefined => {
    SetViewMode('list')
    return undefined
  }
  const iconClassNames = 'p-0.5 inline-block rounded-lg  hover:text-white hover:bg-blue-500'

  return (
    <div className="mb-[20px] items-center">
      <div className="flex items-center my-4">
        <div className="w-2/6">
          <div className="text-gray-600">{viewMode === 'list' ? 'Reports' : ''}</div>
        </div>
        <div className="w-2/6">
          <div className="text-gray-600">{viewMode === 'list' ? 'Last Updated' : ''}</div>
        </div>
        <div className="w-1/6">
          <div className="text-gray-600">{viewMode === 'list' ? 'tasks' : ''}</div>
        </div>
        <div className="w-1/6 cursor-pointer text-end text-3xl">
          <AiOutlineAppstore
            onClick={handleCardView}
            className={`mr-1 ${iconClassNames} ${
              viewMode === 'card' ? 'text-white bg-blue-500' : 'bg-gray-300 '
            }`}
          />
          <AiOutlineMenu
            onClick={handleListView}
            className={`${iconClassNames} ${
              viewMode === 'list' ? 'text-white bg-blue-500' : 'bg-gray-300 '
            }`}
          />
        </div>
      </div>
      {viewMode === 'list' ? <ListView /> : <CardView />}
    </div>
  )
}

export default ReportViewToggle
