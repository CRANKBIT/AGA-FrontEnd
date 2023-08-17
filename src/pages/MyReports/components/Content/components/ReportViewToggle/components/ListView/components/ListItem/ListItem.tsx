import { FC, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaCircle } from 'react-icons/fa'
import ViewPDFReport from '@/pages/ViewPDFReport/ViewPDFReport'

interface Props {
  Year: string
  Make: string
  Model: string
  Rego: string
  Odometer: string
  CustomerName: string
  service: string[]
}

const ListItem: FC<Props> = ({ Year, Model, Odometer, Rego, Make, CustomerName, service }) => {
  const [viewPDF, setViewPDF] = useState(true)
  const viewPDFHandler = (): void => {
    setViewPDF(!viewPDF)
  }
  return (
    <div>
      {viewPDF ? (
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
            <button type="button" className="underline" onClick={viewPDFHandler}>
              View in PDF
            </button>
            <AiOutlineArrowRight className="inline-block ml-1" />
          </div>
        </div>
      ) : (
        <ViewPDFReport
          Year={Year}
          Model={Model}
          Odometer={Odometer}
          Rego={Rego}
          Make={Make}
          CustomerName={CustomerName}
          service={service}
        />
      )}
    </div>
  )
}

export default ListItem
