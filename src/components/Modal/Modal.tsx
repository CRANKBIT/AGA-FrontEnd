import { FC, ReactNode, useState } from 'react'
import classNames from 'classnames'
import { CgClose } from 'react-icons/cg'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { BiFile } from 'react-icons/bi'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

interface Props {
  children?: ReactNode
  variant?: IconVariant
  onClose?: () => void
  isError?: boolean
}

export enum IconVariant {
  Email,
  Validation,
  Form,
}

const Modal: FC<Props> = ({ children = null, variant = null, onClose = undefined, isError = undefined }) => {
  const [isClosed, setIsClosed] = useState(false)

  const handleClose = (): void => {
    setIsClosed(true)
    if (onClose) {
      onClose()
    }
  }

  if (isClosed) {
    return null
  }

  return (
    <div className="w-screen h-screen fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[500px] rounded bg-white p-10 min-h-[500px] flex flex-col items-center">
        <div className="text-6xl self-end">
          <CgClose onClick={handleClose} className="cursor-pointer" />
        </div>
        <div
          className={classNames(
            'w-24',
            'rounded-full',
            'flex',
            'items-center',
            'justify-center',
            'my-2',
            variant === IconVariant.Email && ['bg-gray text-white text-6xl h-24 mt-10'],
            variant === IconVariant.Form && ['text-primary text-[100px] mt-10'],
            variant === IconVariant.Validation && [isError ? 'bg-error' : 'bg-success', 'text-white h-24 mt-10']
          )}
        >
          {variant === IconVariant.Email && <MdOutlineMarkEmailUnread />}
          {variant === IconVariant.Validation &&
            (isError ? <CloseRoundedIcon className="text-6xl" /> : <CheckRoundedIcon className="text-6xl" />)}
          {variant === IconVariant.Form && <BiFile />}
          {}
        </div>
        <div className="text-2xl">{children}</div>
      </div>
    </div>
  )
}

export default Modal
