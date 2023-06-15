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
import ReportS1 from '@/pages/Report_s1'

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
    path: '/my-reports',
    element: <MyReports />,
  },
  {
    path: '/knowledge-base',
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
    path: '/report_s1',
    element: <ReportS1 />,
  },
])

const App: FC = () => <RouterProvider router={router} />

export default App
