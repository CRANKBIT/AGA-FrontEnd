import { Button} from '@mui/material'
import { FC } from 'react'

const SubmitButton: FC<{ ButtonName: string }> = ({ButtonName}) => {


  return (
    <div className="flex justify-center items-center">
    <Button
      type="submit"
      variant="contained"
      className="h-12 w-44 absolute"
      sx={{ fontSize: 22, textTransform: 'capitalize' }}
    >
      {' '}
      {ButtonName}{' '}
    </Button>
  </div>
  )
}

export default SubmitButton