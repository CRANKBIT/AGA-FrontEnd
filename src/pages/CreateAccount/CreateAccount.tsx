import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import axios from '@/utils/axios'
import Modal from './components/Modal'

const CreateAccount: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string>('')

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

  const handleInputChange =
    (setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value)
    }

  const isError = !message.includes('successfully')

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={name} onChange={handleInputChange(setName)} />
        <input type="email" placeholder="Email" value={email} onChange={handleInputChange(setEmail)} />
        <input type="password" placeholder="Password" value={password} onChange={handleInputChange(setPassword)} />
        <button type="submit">Register</button>
      </form>
      {message && <Modal message={message} onClose={handleClosePopup} isError={isError} />}
    </div>
  )
}

export default CreateAccount
