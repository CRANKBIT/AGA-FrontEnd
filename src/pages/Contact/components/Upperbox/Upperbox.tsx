import TextInput from './components/TextField/TextInput'
import Selector from './components/Selector/Selector'
import Messagebox from './components/MessageBox/Messagebox'
import SubmitButton from './components/SubmitButton/SubmitButton'
import { Box, Typography} from '@mui/material'

const Upperbox = () => {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        height: 670,
        backgroundColor: '#EBF1F6',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          className="pt-14"
          sx={{ fontWeight: 'bold' }}
        >
          Contact
        </Typography>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center flex-wrap min-[512px]:space-x-3 mt-7">
          <TextInput width={250} labelName="Name" />

          <TextInput width={250} labelName="Email Address" />
        </div>

        <div className="flex justify-center pt-7">
          <Selector width={512} labelName="Enquiry Type" />
        </div>

        <div className="flex justify-center pt-7">
          <Messagebox width={512} labelName="Message" />
        </div>
      </div>

      <div className="pt-7">
       <SubmitButton ButtonName="Submit"/>
      </div>

    </Box>
  )
}

export default Upperbox