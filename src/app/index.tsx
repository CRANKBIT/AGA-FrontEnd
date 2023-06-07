// External imports
import { HashRouter, Route } from "react-router-dom";

// Local imports
import HomePage from "../pages/Home";
import HomePage2 from "../pages/Home2";

// Component definition
function App() {
  return (
    <HashRouter>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="home2" element={<HomePage2 />} />
    </HashRouter>
  );
}

// Default export
export default App;
