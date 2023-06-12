import { TextField, InputLabel} from '@mui/material'
import { FC, useState, useEffect } from 'react'



const Messagebox: FC<{ width: number; labelName: string }> = ({ width, labelName }) => {
  const inputWidth = width;
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

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
        id="outlined-multiline-static"
        className="bg-white"
        style={{ width: width, margin:0 }}
        sx={{
            fieldset: { borderColor: 'black' },
        }}
        name = {labelName}
        value = {labelName} 

        multiline
        rows = {4}
        />
      </div>
    </div>
  )
}

export default Messagebox
