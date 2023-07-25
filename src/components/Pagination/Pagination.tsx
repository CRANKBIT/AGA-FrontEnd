import { FC, useState } from 'react'

interface Props {
  dataLength: number
  itemsPerPage: number
  paginate: (currentNumber: number) => void
}

const Pagination: FC<Props> = ({ dataLength, itemsPerPage, paginate }) => {
  const pages = Math.ceil(dataLength / itemsPerPage)
  const numbers: number[] = []

  for (let i = 1; i <= pages; i++) {
    numbers.push(i)
  }

  const [activeButton, setActiveButton] = useState<number | null>(1)

  const handleButtonClick = (number: number): void => {
    setActiveButton(number)
    paginate(number)
  }

  return (
    <div className="flex justify-center mt-2 mb-2">
      <ul>
        {numbers.map((number) => (
          <button
            type="button"
            key={number}
            onClick={() => handleButtonClick(number)}
            className={`w-8 h-8 border-[#DDDDDD] border-2 rounded-lg mx-0.5 ${
              activeButton === number ? 'bg-blue-600 text-white' : 'bg-white text-[#4A4A4A]'
            }`}
          >
            {number}
          </button>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
