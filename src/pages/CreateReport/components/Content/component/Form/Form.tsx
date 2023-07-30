/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import Button from '@/components/Button'
import formFields from './assets/formFieldsData'
import Item from './components/Item'
import { createVehicle } from '@/services/vehicle'

const Form: FC = () => {
  const [formFieldValues, setFormFieldValues] = useState({})

  return (
    <div className="bg-white border border-gray px-12 py-10 rounded-2xl shadow">
      {formFields.map(({ title, info }) => (
        <Item
          key={title}
          title={title}
          info={info}
          formFieldValues={formFieldValues}
          setFormFieldValues={setFormFieldValues}
        />
      ))}
      <div className="text-center mt-10">
        <Button
          className="w-[200px] bg-primary"
          onClick={async () => {
            try {
              await createVehicle({
                // @ts-ignore
                ownerName: `${formFieldValues['First Name']} ${formFieldValues['Last Name']}`,
                // @ts-ignore
                rego: formFieldValues.Rego,
                // @ts-ignore
                vin: formFieldValues.VIN,
                // @ts-ignore
                odometer: formFieldValues.Odometer,
              })
              toast.success('Vehicle created successfully!')
            } catch (e) {
              toast.error('Failed to create vehicle!')
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Form
