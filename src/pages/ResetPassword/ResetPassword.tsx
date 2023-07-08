import { ChangeEvent, FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Input, IconButton, InputAdornment, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import Button, { Variant, Size } from '@/components/Button/Button'
import axios from '@/utils/axios'
import Modal from '@/pages/CreateAccount/components/Modal/Modal'

const ResetPassword: FC = () => {
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [confirmPasswordvisible, setconfirmPasswordvisible] = useState(false)
  const [passwordError, setpasswordError] = useState('')
  const [confirmPasswordError, setconfirmPasswordError] = useState('')
  const [message, setMessage] = useState<string>('')

  const location = useLocation()
  const token = new URLSearchParams(location.search).get('token')

  const inputClassName =
    'w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400'

  const togglePasswordVisibility = (): void => {
    setconfirmPasswordvisible(!confirmPasswordvisible)
  }

  const handleInputChange =
    (setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target
      setValue(value)
      let errorMessage = ''
      if (setValue === setpassword) {
        if (value.length < 6 || !/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
          errorMessage = 'At least 6 characters with 1 letter'
        }
        setpasswordError(value !== '' ? errorMessage : '')
      }
      if (setValue === setconfirmPassword) {
        if (value !== password) {
          errorMessage = 'Password not match'
        }
        setconfirmPasswordError(value !== '' ? errorMessage : '')
      }
    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/v1/auth/update-password', {
        password,
        token,
      })
      setMessage(response.data.msg)
    } catch (error) {
      const errorMessage =
        (error as { response?: { data: { msg: string } } }).response?.data.msg || 'An unkonw error occurred'
      setMessage(errorMessage)
    }
  }

  const handleClosePopup = (): void => {
    setMessage('')
  }
  const isError = !message.includes('successfully')

  return (
    <AuthLayout>
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="font-medium mb-5 text-xl">Set new password</div>
          <div className="mt-4 text-lg font-bold">New Password</div>
          <Input
            id="New password"
            type="password"
            value={password}
            placeholder="******"
            className={inputClassName}
            onChange={handleInputChange(setpassword)}
          />
          <div>
            <Typography className="caption" color="error">
              {passwordError}
            </Typography>
          </div>
          <div className="mt-4 text-lg font-bold">Confirm Password</div>
          <Input
            id="Confim Password"
            type={confirmPasswordvisible ? 'text' : 'password'}
            className={inputClassName}
            placeholder="******"
            value={confirmPassword}
            onChange={handleInputChange(setconfirmPassword)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {confirmPasswordvisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <div>
            <Typography className="caption" color="error">
              {confirmPasswordError}
            </Typography>
          </div>
          <Button variant={Variant.Primary} size={Size.Large} className="font-bold mt-8 w-full" type="submit">
            Update Password
          </Button>
        </form>
        {message && <Modal message={message} onClose={handleClosePopup} isError={isError} />}
      </div>
    </AuthLayout>
  )
}
export default ResetPassword
