// External imports
import { Routes, Route } from 'react-router-dom'

// Local imports
import HomePage from '../pages/HomePage'
import TestPage from '../pages/TestPage'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import KnowledgeBase from '../pages/KnowledgeBase'
//import TextField from '../components/AccountTextField'
//import Logo from '../components/AccountLogoBackground'
import Button from '../components/AccountButton'
import { ChangeEvent } from 'react'

// Component definition
const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<TextField label='Fullname' htmlFor={'password'} type={'password'} id={''} value={''} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
      }} placeholder={'password'} />} /> */}
      {/* <Route path="/" element={<Logo />} /> */}
      <Route
        path="/"
        element={<Button text="Sign Up" background_color="#007AD3" text_color="#007AD3" />}
      />
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/test" element={<TestPage />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/knowledge-base" element={<KnowledgeBase />} />
    </Routes>
  )
}

// Default export
export default App
