// External imports
import { Routes, Route } from 'react-router-dom'

// Local imports
import HomePage from '../pages/HomePage'
import TestPage from '../pages/TestPage'

// Component definition
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  )
}

// Default export
export default App
