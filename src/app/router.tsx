import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import MyReports from '@/pages/MyReports/MyReports'

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
  { path: '/my-reports', element: <MyReports /> },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
