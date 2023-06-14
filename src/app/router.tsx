import { FC } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import Report from '@/pages/Report'
import MyReports from '@/pages/MyReports/MyReports'
import KnowledgeBase from '@/pages/KnowledgeBase'
import PrivateRoute from '@/routes/PrivateRoute'
import MyAccount from '@/pages/MyAccount'
import MyProfile from '@/pages/MyProfile'

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
    path: '/report',
    element: <Report />,
  },
  {
    path: '/user/my-reports',
    element: <MyReports />,
  },
  {
    path: '/user/knowledge-base',
    element: <KnowledgeBase />,
  },
  {
    path: '/account',
    element: (
      <PrivateRoute isLoggedIn={isLoggedIn}>
        <MyAccount />
      </PrivateRoute>
    ),
  },
  {
    path: '/user/my-profile',
    element: <MyProfile />,
  },
])

const App: FC = () => <RouterProvider router={router} />

export default App
