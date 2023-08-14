import { FC, useState } from 'react'
import Button from '@/components/Button'
import formFields from './assets/formFieldsData'
import Item from './components/Item'

interface Props {
  nextButtonHandler: () => void
  updateVehicleData: (
    Year: string,
    Make: string,
    Model: string,
    Rego: string,
    Odometer: string,
    CustomerName: string
  ) => void
}
const Form: FC<Props> = ({ nextButtonHandler, updateVehicleData }) => {
  const [inputValue, setInputValues] = useState<{ [key: string]: string }>({})
  const handleNextButtonClick = (): void => {
    updateVehicleData(
      inputValue.Year,
      inputValue.Make,
      inputValue.Model,
      inputValue.Rego,
      inputValue.Odometer,
      inputValue.CustomerName
    )

    nextButtonHandler()
  }
  const handleInputChange = (label: string, value: string): void => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }))
  }
  return (
    <div className="bg-white border border-gray px-12 py-10 rounded-2xl shadow">
      {formFields.map(({ title, info }) => (
        <Item key={title} title={title} info={info} inputValue={inputValue} handleInputChange={handleInputChange} />
      ))}
      <div className="text-center mt-10">
        <Button className="w-[200px] bg-primary" onClick={handleNextButtonClick}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default Form
