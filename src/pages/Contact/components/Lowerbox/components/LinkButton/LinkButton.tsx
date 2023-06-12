import { Button} from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const LinkButton: FC<{ ButtonName: string, Ref: string }> = ({ButtonName, Ref}) => {


  return (
    <div className="flex justify-center items-center">
    <Button
      variant="contained"
      className="h-12 w-44 absolute"
      sx={{ fontSize: 22, textTransform: 'capitalize' }}
    >
      {' '}
      <Link to={Ref}>{ButtonName}</Link>
    </Button>
  </div>
  )
}

export default LinkButton