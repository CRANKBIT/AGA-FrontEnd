import { FC, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/Button'
import ToggleButton from '@/components/ToggleButton'
import ListView from './components/ListView'
import CardView from './components/CardView'
import DatePicker from './components/DatePicker/DatePicker'

const Content: FC = () => {
  const navigate = useNavigate()
  const [viewMode, SetViewMode] = useState<'list' | 'card'>('list')

  return (
    <div className="w-[975px] bg-userContent pt-14 px-20 h-screen overflow-y-scroll">
      <div className="flex items-center justify-between">
        <div className="font-bold text-3xl">Good Morning, Alonso</div>
        <Button
          className="text-center w-[250px] h-10 bg-hover"
          onClick={() => navigate('/user/my-reports/create-report')}
        >
          + Create New Report
        </Button>
      </div>
      <div className="flex justify-between my-9">
        <div className="font-bold">My Report History(12)</div>
        <div className="flex gap-4">
          <div className="p-1 h-8 flex items-center border border-black bg-white rounded w-[250px]">
            <input placeholder="Search.." className="focus:outline-none" />
            <CiSearch />
          </div>
          <DatePicker />

          <div className="w-1/6 flex cursor-pointer text-3xl">
            <ToggleButton icon={AiOutlineAppstore} isActive={viewMode === 'card'} onClick={() => SetViewMode('card')} />
            <ToggleButton icon={AiOutlineMenu} isActive={viewMode === 'list'} onClick={() => SetViewMode('list')} />
          </div>
        </div>
      </div>

      {viewMode === 'list' ? <ListView /> : <CardView />}
    </div>
  )
}

export default Content
