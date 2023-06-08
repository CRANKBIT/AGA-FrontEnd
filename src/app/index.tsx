// External imports
import { Routes, Route } from 'react-router-dom'

// Local imports
import HomePage from '../pages/HomePage'
import TestPage from '../pages/TestPage'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

// Component definition
const App = () => {
  return (
    <Routes>
      <Route path="`${process.env.PUBLIC_URL}/`" element={<HomePage />} />
      <Route path="`${process.env.PUBLIC_URL}/test" element={<TestPage />} />
      <Route path="`${process.env.PUBLIC_URL}/auth/signup`" element={<SignUp />} />
      <Route path="`${process.env.PUBLIC_URL}/auth/login`" element={<Login />} />
    </Routes>
  )
}

// Default export
export default App
