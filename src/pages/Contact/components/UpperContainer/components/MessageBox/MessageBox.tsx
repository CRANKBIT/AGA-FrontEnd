import { TextField, InputLabel} from '@mui/material'
import { FC, useState, useEffect } from 'react'



const MessageBox: FC<{ width: number; labelName: string; }> = ({ width, labelName}) => {
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

  const cssValue = `bg-white m-0 w-[${width}px]`;



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
        id="outlined-multiline-static"
        className={cssValue}
        sx={{
            fieldset: { borderColor: 'black' },
        }}
        name = {labelName}
        multiline
        required
        rows = {4}
        />
      </div>
    </div>
  )
}

export default MessageBox
