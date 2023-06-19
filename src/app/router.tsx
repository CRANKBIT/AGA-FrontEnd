import { FC } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import Report from '@/pages/Report'
import MyReports from '@/pages/MyReports'
import KnowledgeBase from '@/pages/KnowledgeBase'
import HelpSupport from '@/pages/HelpSupport/HelpSupport'
import PrivateRoute from '@/routes/PrivateRoute'
import MyAccount from '@/pages/MyAccount'

import ReportS1 from '@/pages/Report_s1'
import MyProfile from '@/pages/MyProfile'
import CreateAccount from '@/pages/CreateAccount'
import MyReportsHistory from '@/pages/MyReportsHistory'
import Contact from '@/pages/Contact/Contact'

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
    path: '/user/my-profile',
    element: <MyProfile />,
  },
  {
    path: '/auth/signup/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/user/my-reports/history',
    element: <MyReportsHistory />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

const App: FC = () => <RouterProvider router={router} />

export default App
