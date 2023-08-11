import { FC, useEffect, useState } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import GetStarted from '@/pages/GetStarted'
import Login from '@/pages/Login'
import Report from '@/pages/Report'
import MyReports from '@/pages/MyReports'
import KnowledgeBase from '@/pages/KnowledgeBase'
import HelpSupport from '@/pages/HelpSupport'
import PrivateRoute from '@/routes/PrivateRoute'
import PublicRoute from '@/routes/PublicRouter'
import PublicLoginRoute from '@/routes/PublicLoginRoute'
import MyUsers from '@/pages/MyUsers'
import MyAccount from '@/pages/MyAccount'
import MyProfile from '@/pages/MyProfile'
import CreateAccount from '@/pages/CreateAccount'
import MyReportsHistory from '@/pages/MyReportsHistory'
import CreateReport from '@/pages/CreateReport'
import ResetPassword from '@/pages/ResetPassword'
import ForgotPassword from '@/pages/ForgotPassword'
import AboutUs from '@/pages/AboutUs'
import SetNewPassword from '@/pages/SetNewPassword/SetNewPassword'
import ServiceItem from '@/pages/ServiceItem/ServiceItem'
import MyCompanyReport from '@/pages/MyCompanyReport/MyCompanyReport'
import MyCompany from '@/pages/MyCompany/MyCompany'
import MyProfileTenant from '@/pages/MyProfileTenant'
import NotFound from '@/pages/NotFound'
import getSubdomain from '@/utils/subdomain'
import checkSubDomain from '@/services/public'
import ViewPDFReport from '@/pages/ViewPDFReport/ViewPDFReport'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/get-started',
    element: <GetStarted />,
  },
  {
    path: '/auth/set-new-password',
    element: <SetNewPassword />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/report', // create report
    element: <Report />,
  },
  {
    path: '/user/my-reports', // report list
    element: (
      <PublicRoute>
        <MyReports />
      </PublicRoute>
    ),
  },
  {
    path: '/user/my-reports/create-report',
    element: <CreateReport />,
  },
  {
    path: '/user/my-reports/service-item',
    element: <ServiceItem />,
  },
  {
    path: '/user/knowledge-base',
    element: <KnowledgeBase />,
  },
  {
    path: '/user/help-support',
    element: <HelpSupport />,
  },
  {
    path: '/publicLogin/:url/:userLS',
    element: <PublicLoginRoute />,
  },
  {
    path: '/my-users',
    element: <MyUsers />,
  },
  {
    path: '/account',
    element: (
      <PrivateRoute>
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
    path: '/user/my-reports/history/view-report',
    element: <ViewPDFReport />,
  },
  {
    path: '/auth/login/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/auth/login/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/tenant/my-company',
    element: <MyCompany />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/tenant/MyCompanyReport',
    element: <MyCompanyReport />,
  },
  {
    path: '/tenant/MyProfile',
    element: <MyProfileTenant />,
  },
  {
    path: '/NotFound',
    element: <NotFound />,
  },
])

const App: FC = () => {
  const [domainExists, setDomainExists] = useState(true)
  useEffect(() => {
    const subdomain = getSubdomain()
    checkSubDomain(subdomain).then((response) => {
      const result = response.data
      setDomainExists(result)
    })
  }, [])

  if (domainExists) {
    return <RouterProvider router={router} />
  }
  return <NotFound />
}

export default App
