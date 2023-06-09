import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import KnowledgeBase from '@/pages/KnowledgeBase'

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
  { path: '/knowledge-base', element: <KnowledgeBase /> },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
