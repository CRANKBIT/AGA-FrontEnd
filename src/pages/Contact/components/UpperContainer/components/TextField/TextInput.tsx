import { TextField, InputLabel} from '@mui/material'
import { FC } from 'react'

const TextInput: FC<{ width: number; labelName: string, type: string }> = ({ width, labelName, type }) => {

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
          margin="dense"
          id="outlined-required"
          className={cssValue}
          size = "small"
          required
          sx={{
            fieldset: { borderColor: 'black' },
          }}
          name = {labelName}
          type={type}
        />
      </div>
    </div>
  )
}

export default TextInput
