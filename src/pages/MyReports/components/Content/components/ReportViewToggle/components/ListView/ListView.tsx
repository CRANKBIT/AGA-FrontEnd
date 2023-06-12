import { FC } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
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
]

const commonClassNames = 'h-[84px] mb-[20px] border-b-[1px] border-blue-900 border-opacity-20'

const renderedListItems = dummyList.map(({ report, lastUpdated, task }) => (
  <div key={report} className="flex items-center">
    <div className={`w-2/6 font-bold ${commonClassNames}`}>
      {report}
      <div className="font-normal text-gray-600">
        <FaCircle className="text-green-400 inline-block mr-3" />
        Active
      </div>
    </div>
    <div className={`w-2/6 ${commonClassNames}`}>
      {lastUpdated}
      <div>You</div>
    </div>
    <div className={`w-1/6 ${commonClassNames}`}>
      <div className="font-bold">{task}</div>
      <div>8 today</div>
    </div>
    <div
      className={`cursor-pointer w-1/6 text-[#007AD3] flex items-center justify-end ${commonClassNames}`}
    >
      <div className="underline">See More</div>
      <AiOutlineArrowRight className="inline-block ml-1" />
    </div>
  </div>
))

const ListView: FC = () => <div>{renderedListItems}</div>

export default ListView
