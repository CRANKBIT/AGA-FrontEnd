import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Input, IconButton, InputAdornment, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import AuthLayout from '@/layouts/AuthLayout'
import Button, { Variant, Size } from '@/components/Button'
import axios from '@/utils/axios'
import Modal from './components/Modal'

const CreateAccount: FC = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [message, setMessage] = useState<string>('')

  const handleInputChange =
    (setValue: React.Dispatch<React.SetStateAction<string>>, validatePassword = false) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value)

      if (validatePassword) {
        const { value } = e.target
        if (value.length < 8 || !/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
          setPasswordError(' At least 8 characters with 1 letter')
        } else {
          setPasswordError('')
        }
      }
    }

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible)
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/v1/auth/register', {
        name,
        email,
        password,
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
      <div className=" bg-white flex-1 w-1/2 grid place-items-center">
        <form onSubmit={handleSubmit}>
          <div className="text-xl font-medium mb-5">Create Account</div>
          <div className="mt-4 text-xs font-bold">Full Name</div>
          <Input
            id="name"
            type="text"
            value={name}
            placeholder="John Wick"
            onChange={handleInputChange(setname)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <div className="mt-5 text-xs font-bold">Email Address</div>
          <Input
            id="EmailAddress"
            type="email"
            value={email}
            placeholder="John@email.com"
            onChange={handleInputChange(setEmail)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <div className="mt-4 text-xs font-bold">Password</div>
          <Input
            id="password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50"
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            placeholder="********"
            onChange={handleInputChange(setPassword, true)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {passwordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <div>
            <Typography className="caption" color="error">
              {passwordError}
            </Typography>
          </div>

          <Button variant={Variant.Primary} size={Size.Large} className="font-bold mt-8 w-full" type="submit">
            Sign Up
          </Button>
          <div className="flex justify-between items-center my-3">
            <hr className="w-28" />
            or
            <hr className="w-28" />
          </div>

          <Button variant={Variant.PrimaryOutline} size={Size.Large} className="font-bold w-full">
            Login
          </Button>
        </form>
        {message && <Modal message={message} onClose={handleClosePopup} isError={isError} />}
      </div>
    </AuthLayout>
  )
}

export default CreateAccount
