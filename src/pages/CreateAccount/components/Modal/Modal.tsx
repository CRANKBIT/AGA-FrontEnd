import { FC } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

interface Props {
  onClose: () => void
  message: string
  isError: boolean
}

const Modal: FC<Props> = ({ message, onClose, isError }) => (
  <div className="fixed inset-0 bg-background/40 flex items-center justify-center">
    <div className="rounded-[10px] w-[490px] h-[400px] text-center bg-white">
      <div className="text-end">
        <CloseRoundedIcon className="cursor-pointer mt-5 mb-14 mr-5" onClick={onClose} />
      </div>
      {isError ? (
        <CloseRoundedIcon className="text-[70px] rounded-[70px] text-white bg-error" />
      ) : (
        <CheckRoundedIcon className="text-[70px] rounded-[70px] text-white bg-success" />
      )}
      <div className="font-semi-bold text-xl mt-12">{message}</div>
    </div>
  </div>
)

export default Modal
