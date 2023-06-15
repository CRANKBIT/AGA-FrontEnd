import TextInput from './components/TextField/TextInput'
import Selector from './components/Selector/Selector'
import MessageBox from './components/MessageBox'
import SubmitButton from './components/SubmitButton/SubmitButton'
import { Box, Typography } from '@mui/material'

const UpperContainer = () => {
  return (
    <Box className="h-[670px] bg-[#EBF1F6]">
      <div>
        <Typography variant="h3" gutterBottom align="center" className="pt-[56px] font-bold">
          Contact
        </Typography>
      </div>
      <form action="" method="get">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center flex-wrap min-[512px]:space-x-3 mt-[28px]">
            <TextInput width={250} labelName="Name" type="string" />
            <TextInput width={250} labelName="Email Address" type="email"/>
          </div>

          <div className="flex justify-center pt-[28px]">
            <Selector width={512} labelName="Enquiry Type" />
          </div>

          <div className="flex justify-center pt-[28px]">
            <MessageBox width={512} labelName="Message"/>
          </div>
        </div>

        <div className="pt-[40px]">
          <SubmitButton ButtonName="Submit" />
        </div>
      </form>
    </Box>
  )
}

export default UpperContainer
