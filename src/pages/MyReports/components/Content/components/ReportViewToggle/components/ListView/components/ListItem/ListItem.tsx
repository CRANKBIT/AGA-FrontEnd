import { FC } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaCircle } from 'react-icons/fa'

interface Props {
  Year: string
  Make: string
  Model: string
  Rego: string
  Odometer: string
  CustomerName: string
  service: string[]
}

const ListItem: FC<Props> = ({ Year, Model, Odometer, Rego, Make, CustomerName, service }) => (
  <div className="flex items-center gap-20 h-[84px] mb-[20px] border-b-[1px] border-blue-900 border-opacity-20">
    <div className="font-bold min-w-[140px] text-center">
      {Rego}
      <div className="font-normal text-gray-600 text-center">
        <FaCircle className="text-green-400 inline-block mr-3" />
        Active
      </div>
    </div>
    <div className="min-w-[140px] text-center">{Make}</div>
    <div className=" min-w-[140px]">
      <div className="font-bold text-center">{CustomerName}</div>
    </div>
    <div className="cursor-pointer text-[#007AD3] flex items-center">
      <div className="underline">See More</div>
      <AiOutlineArrowRight className="inline-block ml-1" />
    </div>
  </div>
)

export default ListItem
