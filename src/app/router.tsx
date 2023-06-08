import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'

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
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
