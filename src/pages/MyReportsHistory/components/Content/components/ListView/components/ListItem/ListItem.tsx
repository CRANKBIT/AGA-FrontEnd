import { FC } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

interface Props {
  report: string
  lastUpdated: string
  taskNumber: number
}

const ListItem: FC<Props> = ({ report, lastUpdated, taskNumber }) => (
  <div className="flex items-center gap-9 p-5 h-20 mb-5 border-b border-blue-900 border-opacity-20">
    <div className="font-bold min-w-[200px]">{report}</div>
    <div className="min-w-[240px]">{lastUpdated}</div>
    <div className="min-w-[100px]">
      <div className="font-bold">{taskNumber}</div>
    </div>
    <div className="cursor-pointer min-w-[140px] text-primary flex items-center">
      <Link to="/user/my-reports/history/view-report" className="underline">
        <span className="inline">See More</span>
        <AiOutlineArrowRight className="ml-1 inline" />
      </Link>
    </div>
  </div>
)

export default ListItem
