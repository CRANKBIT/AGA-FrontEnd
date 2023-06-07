// External imports
import { Routes, Route } from 'react-router-dom'

// Local imports
import HomePage from './HomePage'
import TestPage from './TestPage'

// Component definition
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      {/* <Route path="home2" element={<HomePage2 />} /> */}
    </Routes>
  )
}

// Default export
export default App
