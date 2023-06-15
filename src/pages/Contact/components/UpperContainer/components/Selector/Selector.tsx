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

  const cssValue = `bg-white m-0 w-[${width}px]`;

  const enquiryType = [
    {
      value: 'Sales',
      label: 'Sales',
    },
  ]
  
  return (
    <div>
      <div>
        <InputLabel
          className="flex text-black"
        >
        {labelName}
        </InputLabel>
      </div>

      <div>
      <TextField
        id="enquiryType"
        select
        defaultValue="Sales"
        className= {cssValue}
        
        size = "small"
        sx={{
          fieldset: { borderColor: 'black' },
        }}
        name = {labelName}

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
