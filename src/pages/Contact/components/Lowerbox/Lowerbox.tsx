import { Box, Typography} from '@mui/material'
import LinkButton from './components/LinkButton/LinkButton'

const Lowerbox = () => {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        height: 300,
        backgroundColor: '#0A2030',
      }}
      className="relative"
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography gutterBottom align="center" className="pt-20 text-white">
          Get Started by creating an account for FREE!
        </Typography>
      </div>

      <div className="flex justify-center items-center h-40">
        <LinkButton Ref="/auth/signup" ButtonName="Let's Do IT!"/>
      </div>
    </Box>
  )
}

export default Lowerbox
