import { FC } from 'react'
import { FaCircle } from 'react-icons/fa'

const dummyList = [
  {
    report: 'Rego BI9820',
    lastUpdated: '25 Dec 2022 - 18:24',
    task: 7,
  },
  {
    report: 'Rego 45FE67',
    lastUpdated: '25 Dec 2022 - 18:24',
    task: 23,
  },
  {
    report: 'Rego W235EW',
    lastUpdated: '25 Dec 2022 - 18:24',
    task: 4,
  },
  {
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    task: 54,
  },
  {
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    task: 512,
  },
  {
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    task: 76,
  },
  {
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    task: 512,
  },
  {
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    task: 76,
  },
]

const CardView: FC = () => (
  <div className="grid grid-cols-3 gap-6">
    {dummyList.map(({ report, lastUpdated, task }) => (
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
    ))}
  </div>
)

export default CardView
