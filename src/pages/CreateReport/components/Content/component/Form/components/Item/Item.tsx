import { FC } from 'react'

interface Props {
  title: string
  info: Array<{
    label: string
    type: string
    placeholder: string
  }>
  inputValue: {
    [key: string]: string
  }
  handleInputChange: (label: string, value: string) => void
}

const Item: FC<Props> = ({ title, info, inputValue, handleInputChange }) => (
  <>
    <div className="border-b border-gray text-2xl font-bold mb-4">{title}</div>
    <div>
      {info.map(({ label, placeholder }) => (
        <div key={label} className="mb-4">
          <div>{label}</div>
          <input
            className="h-10 w-full border border-gray rounded px-4 focus:outline-none"
            placeholder={placeholder}
            onChange={(e) => handleInputChange(label, e.target.value)}
            value={inputValue[label]}
          />
        </div>
      ))}
    </div>
  </>
)

export default Item
