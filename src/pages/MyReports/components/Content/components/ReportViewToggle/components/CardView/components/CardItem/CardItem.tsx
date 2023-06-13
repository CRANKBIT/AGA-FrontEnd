import { FC } from 'react'
import { FaCircle } from 'react-icons/fa'

interface Props {
  report: string
  lastUpdated: string
  task: number
  id: string
}

const CardItem: FC<Props> = ({ report, lastUpdated, task, id }) => (
  <div>
    <div key={report} className="border border-gray-400 h-36 w-[250px] p-5 rounded">
      <div className="font-bold">{report}</div>
      <div className="flex justify-between text-sm ">
        <div>
          <FaCircle className="text-green-400 inline-block mr-3" />
          <span>
            {task}
            {' Tasks'}
          </span>
        </div>
        <div>8 today</div>
      </div>
      <div className="text-gray-400 text-sm mt-4">
        {'You '}
        {lastUpdated}
      </div>
    </div>
  </div>
)

export default CardItem
