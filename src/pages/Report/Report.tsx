import { FC, useState } from 'react'
import { HiOutlineCamera } from 'react-icons/hi'
import { Link } from '@mui/material'
import UserLayout from '@/layouts/CompanyLayout'
import Snapshot from './Components/Snapshot'
// import ReportList from '@/components/ReportList/ReportList'

const Report: FC = () => (
  <UserLayout>
    <Snapshot />
  </UserLayout>
)

export default Report
