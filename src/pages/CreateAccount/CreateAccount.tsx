import React, { FC, useState } from 'react'
import { Input, IconButton, InputAdornment, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import AuthLayout from '@/layouts/AuthLayout'
import Button, { Variant, Size } from '@/components/Button'

const CreateAccount: FC = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFullName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setPassword(value)
    if (value.length < 8 || !/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
      setPasswordError('Password must be at least 8 characters long and contain at least 1 letter.')
    } else {
      setPasswordError('')
    }
  }
  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <AuthLayout>
      <div className="px-44 py-80 bg-white">
        <div className="text-xl font-medium mb-5">Create Account</div>
        <div className="mt-4 text-xs font-bold">Full Name</div>
        <Input
          id="fullName"
          type="text"
          value={fullName}
          placeholder="John Wick"
          onChange={handleFullNameChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <div className="mt-5 text-xs font-bold">Email Address</div>
        <Input
          id="EmailAddress"
          type="text"
          value={email}
          placeholder="John@email.com"
          onChange={handleEmailChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <div className="mt-4 text-xs font-bold">Password</div>
        <Input
          id="passwird"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50"
          type={passwordVisible ? 'text' : 'password'}
          value={password}
          placeholder="********"
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={togglePasswordVisibility}
                sx={{
                  height: 10,
                }}
              >
                {passwordVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {passwordError && (
          <Typography variant="caption" color="error">
            {passwordError}
          </Typography>
        )}

        <Button variant={Variant.Primary} size={Size.Large} className="font-bold mt-8 w-full">
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
      </div>
    </AuthLayout>
  )
}

export default CreateAccount
