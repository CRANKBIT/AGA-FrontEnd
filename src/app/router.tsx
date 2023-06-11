import { FC } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import Report_1 from '@/pages/Report_1'
import MyReports from '@/pages/MyReports/MyReports'
import KnowledgeBase from '@/pages/KnowledgeBase'
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
    path: '/Report_1',
    element: <Report_1 />,
  },
  { path: '/my-reports', element: <MyReports /> },
  { path: '/knowledge-base', element: <KnowledgeBase /> },
    path: '/my-reports', element: <MyReports />
  },
  {
    path: '/knowledge-base', element: <KnowledgeBase />
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

const App: FC = () => <RouterProvider router={router} />

export default App
