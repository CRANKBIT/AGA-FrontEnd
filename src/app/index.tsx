import { Routes, Route } from 'react-router-dom'
import Report_s1 from '../pages/Report_s1'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/Report_s1" element={<Report_s1 />} />
    </Routes>
  )
}

export default App
