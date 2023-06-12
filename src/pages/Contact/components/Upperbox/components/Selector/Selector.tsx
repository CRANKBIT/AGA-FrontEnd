import { TextField, InputLabel, MenuItem} from '@mui/material'
import { FC, useEffect, useState } from 'react'

const Selector: FC<{ width: number; labelName: string }> = ({ width, labelName }) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const inputWidth = width;
  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
  
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [screenSize])


  if (screenSize.width < inputWidth) {
    width = 250;
  }

  const enquiryType = [
    {
      value: 'Sales',
      label: 'Sales',
    },
    {
      value: 'A',
      label: 'A',
    },
  ]

  return (
    <div>
      <div>
        <InputLabel
          sx={{
            display: 'flex',
            color: 'black',
            fontSize: '500',
          }}
        >
        {labelName}
        </InputLabel>
      </div>

      <div>
      <TextField
        id="enquiryType"
        select
        defaultValue="Sales"
        className="bg-white"
        size = "small"
        style={{ width: width, margin: 0 }}
        sx={{
          fieldset: { borderColor: 'black' },
        }}
        name = {labelName}
        value= {labelName}

      >
        {enquiryType.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      </div>
    </div>
  )
}

export default Selector
