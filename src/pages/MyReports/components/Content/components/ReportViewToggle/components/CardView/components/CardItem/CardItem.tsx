import { FC } from 'react'
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

const CardItem: FC<Props> = ({ Year, Model, Odometer, Rego, Make, CustomerName, service }) => (
  <div>
    <div key={Rego} className="border border-border h-36 w-[250px] p-5 rounded">
      <div className="font-bold">{Rego}</div>
      <div className="flex justify-between text-sm">
        <div>
          <FaCircle className="text-active inline-block mr-3" />
          <span>{Make}</span>
        </div>
      </div>
      <div className="text-gray text-sm mt-4">{CustomerName}</div>
    </div>
  </div>
)

export default CardItem
