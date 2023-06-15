import { FC } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import Report from '@/pages/Report'
import MyReports from '@/pages/MyReports/MyReports'
import KnowledgeBase from '@/pages/KnowledgeBase'
import HelpSupport from '@/pages/HelpSupport/HelpSupport'
import PrivateRoute from '@/routes/PrivateRoute'
import MyAccount from '@/pages/MyAccount'
import Profile from '@/pages/Profile'
import CreateAccount from '@/pages/CreateAccount/CreateAccount'

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
    path: '/my-reports',
    element: <MyReports />,
  },
  {
    path: '/knowledge-base',
    element: <KnowledgeBase />,
  },
  {
    path: '/help-support',
    element: <HelpSupport />,
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
    path: '/usr/profile',
    element: <Profile />,
  },
  {
    path: '/auth/signup/create-account',
    element: <CreateAccount />,
  },
])

const App: FC = () => <RouterProvider router={router} />

export default App
