import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { registerUser } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/app/hooks'
import AuthButton from '@/components/AuthButton/AuthButton'
import { Variant } from '@/components/Button'
import AuthTextField from '@/components/AuthTextField/AuthTextField'
import Label from '@/components/Label/Label'
import IconVisibility from '@/components/IconVisibility/IconVisibility'
import PasswordProcessBar from './PasswordProcessBar'

const Form: FC = () => {
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const handleRegister = (): void => {
    const newUser = {
      name: fullName,
      email,
      password,
    }

    dispatch(registerUser(newUser))
  }

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      togglePasswordVisibility()
    }
  }

  return (
    <div className="mx-24 flex flex-col justify-center h-screen">
      <div>
        <h4 className="text-2xl text-textColorBlack font-medium leading-6 mb-6">Create Account</h4>
        <form>
          <Label label="Full Name" htmlFor="username" />
          <AuthTextField
            type="text"
            id="username"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            placeholder="Enter your username.."
          />

          <Label label="Email Address" htmlFor="email" />
          <AuthTextField
            type="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="Enter your email.."
          />

          <Label label="Password" htmlFor="password" />
          <AuthTextField
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder=""
            showIcon
          >
            <IconVisibility
              visibleIcon={<AiFillEye className="text-gray-400 text-2xl" />}
              invisibleIcon={<AiFillEyeInvisible className="text-grey-400 text-2xl" />}
              toBeVisible={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              handleKeyDown={handleKeyDown}
            />
          </AuthTextField>
          <PasswordProcessBar inputPassword={password} />

          <AuthButton variant={Variant.Primary} onClick={handleRegister}>
            Sign Up
          </AuthButton>
        </form>
      </div>
      <div>
        <div className="flex items-center my-6">
          <div className="flex-grow h-0.5 bg-textColorBlack opacity-40 mr-4" />
          <span className="text-textColorBlack font-normal font-inter text-base">Already have an Account?</span>
          <div className="flex-grow h-0.5 bg-textColorBlack opacity-40 ml-4" />
        </div>
        <Link to="/auth/login">
          <AuthButton variant={Variant.PrimaryOutline}>Login</AuthButton>
        </Link>
      </div>
    </div>
  )
}

export default Form
