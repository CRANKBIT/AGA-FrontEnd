import { FC } from 'react'

type InputProps = {
  label?: string
  htmlFor?: string
  type: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

// TextField with Label when you asign value to both label and htmlFor
// TextField with no Label when you leave label and htmlFor value undefined or null
const AuthTextField: FC<InputProps> = ({
  label = undefined,
  htmlFor = undefined,
  type,
  id,
  value,
  onChange,
  placeholder,
}: InputProps) => (
  <div className="mb-6 w-full">
    {label && htmlFor && (
      <label
        htmlFor={htmlFor}
        className="block text-textColorBlack leading-5 font-medium text-base mb-0.5 font-inter"
      >
        {label}
      </label>
    )}
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full bg-white text-base leading-5 border border-secondary rounded-md px-4 py-2 placeholder-textColorBlack opacity-40"
    />
  </div>
)

export default AuthTextField
