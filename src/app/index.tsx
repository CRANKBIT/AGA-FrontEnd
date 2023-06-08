import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  )
}

export default App
