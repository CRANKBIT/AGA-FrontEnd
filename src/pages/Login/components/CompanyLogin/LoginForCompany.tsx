import React from 'react'
import FormBuilder from './FormBuilder/FormBuilder'
import LoginPage from './LoginPage/LoginPage'

const LoginForCompany = () => {
  return (
    <div className="flex justify-center p-4">
      <FormBuilder />
      <LoginPage />
    </div>
  )
}

export default LoginForCompany
