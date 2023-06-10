import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import Report_1 from '@/pages/Report_1'

// import { Report } from '@mui/icons-material'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/Report_1',
    element: <Report_1 />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
