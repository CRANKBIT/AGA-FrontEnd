import { FC, useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/Button'
import formFields from './assets/formFieldsData'
import Item from './components/Item'

// interface Props {
//   inputValue: {
//     [key: string]: string
//   }
//   handleInputChange: (label:string, value:string)=>void
// }
const Form: FC = () => {
  const [inputValue, setInputValues] = useState<{ [key: string]: string }>({})
  const handleInputChange = (label: string, value: string): void => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }))
  }
  return (
  <div className="bg-white border border-gray px-12 py-10 rounded-2xl shadow">
    {formFields.map(({ title, info }) => (
      <Item key={title} title={title} info={info} inputValue={inputValue} handleInputChange={handleInputChange}/>
    ))}
    <div className="text-center mt-10">
      <Link to="/user/my-reports/service-item">
        <Button className="w-[200px] bg-primary">Next</Button>
      </Link>
    </div>
  </div>
)
    }

export default Form
