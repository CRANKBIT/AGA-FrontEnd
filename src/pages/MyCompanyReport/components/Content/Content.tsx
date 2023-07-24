import { FC, useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai'
import ToggleButton from '@/components/ToggleButton'
import ListView from './components/ListView'
import CardView from './components/CardView'
import DatePicker from './components/DatePicker'
import Pagination from '@/components/Pagination'
import mockData from '../../assets/mockData'

interface VehicleData {
  report: string
  lastUpdated: string
  taskNumber: number
  id: string
}

const Content: FC = () => {
  const [viewMode, SetViewMode] = useState<'list' | 'card'>('list')
  const [Data, setData] = useState<VehicleData[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage] = useState(5)
  useEffect(() => {
    setData(mockData)
  }, [])
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItem = Data.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (currentNumber: number): void => setCurrentPage(currentNumber)
  return (
    <div className="w-[975px] bg-userContent pt-14 px-20 h-screen overflow-y-scroll">
      <div className="flex justify-between my-9">
        <div className="font-bold">Company A Report History(10)</div>
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
      {viewMode === 'list' ? (
        <div>
          <ListView currentItem={currentItem} />
          <Pagination dataLength={Data.length} itemsPerPage={itemsPerPage} paginate={paginate} />
        </div>
      ) : (
        <CardView />
      )}
    </div>
  )
}

export default Content
