import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import PrivateRoute from '@/routes/PrivateRoute'
import MyAccount from '@/pages/MyAccount'

const isLoggedIn = true
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
    path: '/account',
    element: (
      <PrivateRoute isLoggedIn={isLoggedIn}>
        <MyAccount />
      </PrivateRoute>
    ),
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
