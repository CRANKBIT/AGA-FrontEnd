import { FC, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from '@/components/Button'
import Arrow from './assets/Arrow.svg'
import Form from './component/Form'
import ServiceItem from './component/ServiceItem/ServiceItem'

const Content: FC = () => {
  const navigate = useNavigate()
  const [nextButton, setNextButton] = useState(true)
  const [vehicleData, setVehicleData] = useState({
    Year: '',
    Make: '',
    Model: '',
    Rego: '',
    Odometer: '',
    CustomerName: '',
  })
  const nextButtonHandler = (): void => {
    setNextButton(!nextButton)
  }
  const updateVehicleData = (
    Year: string,
    Make: string,
    Model: string,
    Rego: string,
    Odometer: string,
    CustomerName: string
  ): void => {
    setVehicleData({
      Year,
      Make,
      Model,
      Rego,
      Odometer,
      CustomerName,
    })
  }

  return (
    <div className="bg-[#E9EFF4] min-h-screen">
      <div className="flex items-center justify-between px-[84px] pt-14 mb-7">
        <div>
          <div className="text-3xl font-bold">Create New Report</div>
          <div className="flex gap-2 mt-2">
            <Link to="/user/my-reports">
              <div className="text-primary underline">My Report</div>
            </Link>
            <img src={Arrow} alt="arrow" />
            <div>Create New Report</div>
          </div>
        </div>
        <div>
          <Button className="bg-primary" onClick={() => navigate('/user/my-reports')}>
            Back to My Reports
          </Button>
        </div>
      </div>
      <div>
        {nextButton ? (
          <form className="px-[188px] ">
            <Form nextButtonHandler={nextButtonHandler} updateVehicleData={updateVehicleData} />
          </form>
        ) : (
          <ServiceItem vehicleData={vehicleData} />
        )}
      </div>
    </div>
  )
}

export default Content
