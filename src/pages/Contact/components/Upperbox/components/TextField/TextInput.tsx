import { TextField, InputLabel} from '@mui/material'
import { FC } from 'react'

const TextInput: FC<{ width: number; labelName: string }> = ({ width, labelName }) => {


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
          margin="dense"
          id="outlined-required"
          className="bg-white"
          size = "small"
          style={{ width: width, margin: 0 }}
          sx={{
            fieldset: { borderColor: 'black' },
          }}
          name = {labelName}
          value = {labelName}
        />
      </div>
    </div>
  )
}

export default TextInput
