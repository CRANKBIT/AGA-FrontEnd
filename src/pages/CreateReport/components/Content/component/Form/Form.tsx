import { FC } from 'react'
import Button from '@/components/Button'
import formFields from './assets/formFieldsData'

const Form: FC = () => (
  <div className="bg-white border border-gray px-12 py-10 rounded-2xl shadow">
    {formFields.map(({ title, info }) => (
      <div key={title}>
        <div className="border-b border-gray text-2xl font-bold mb-4">{title}</div>
        <div>
          {info.map(({ label, type, placeholder }) => (
            <div key={label} className="mb-4">
              <div>{label}</div>
              <input
                className="h-10 w-full border border-gray rounded px-4 focus:outline-none"
                type={type}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
      </div>
    ))}
    <div className="text-center mt-10">
      <Button className="w-[200px] bg-primary">Next</Button>
    </div>
  </div>
)

export default Form
