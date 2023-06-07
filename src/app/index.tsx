// External imports
import { HashRouter, Route } from "react-router-dom";

// Local imports
import HomePage from './HomePage'
import TestPage from './TestPage'

// Component definition
const App = () => {
  return (
    <HashRouter>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="home2" element={<HomePage2 />} />
    </HashRouter>
  );
}

// Default export
export default App
