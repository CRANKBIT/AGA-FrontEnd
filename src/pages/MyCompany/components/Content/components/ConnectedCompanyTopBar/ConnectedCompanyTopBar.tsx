import { FC, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import AddCompanyPopUp from './components/AddCompanyPopUp/AddCompanyPopUp'
import DeleteCompanyPopUp from './components/DeleteCompanyPopUp/DeleteCompanyPopUp'
import BusinessIcon from './assets/BusinessIcon.svg'

const ConnectedCompanyTopBar: FC = () => {
  const [addCompanyPopUp, setAddCompanyPopUp] = useState(false)
  const [deleteCompanyPopUp, setDeleteCompanyPopUp] = useState(false)

  return (
    <div className="mx-auto flex justify-between w-[808px] h-[72px] bg-[#F3F2F2] border border-[#DDDBDA] px-[15px]">
      <div className="flex items-center">
        <img src={BusinessIcon} alt="Business Icon" className="w-9 h-9" />
        <span className="text-[20px] font-medium ml-[10px]">Connected Company</span>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="bg-white w-[125px] h-8 border border-[#DDDBDA] rounded flex items-center"
          onClick={() => {
            setAddCompanyPopUp(true)
          }}
          onMouseDown={() => {
            setAddCompanyPopUp(false)
          }}
        >
          <AddIcon className="text-[#706E6B] ml-2" />
          <span className="text-primary text-[15px] ml-[6px] font-medium">Company</span>
        </button>

        <button
          type="button"
          className="bg-white w-20 h-8 border border-[#DDDBDA] rounded ml-[15px]"
          onClick={() => {
            setDeleteCompanyPopUp(true)
          }}
          onMouseDown={() => {
            setDeleteCompanyPopUp(false)
          }}
        >
          <span className="text-primary text-[15px] font-medium">Delete</span>
        </button>
      </div>

      {addCompanyPopUp && <AddCompanyPopUp />}
      {deleteCompanyPopUp && <DeleteCompanyPopUp />}
    </div>
  )
}

export default ConnectedCompanyTopBar
