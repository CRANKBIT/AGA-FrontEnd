import { FC } from 'react'
import { Link } from 'react-router-dom'
import ItemsList from './components/ItemsList'
import UserLayout from '@/layouts/UserLayout'

const ServiceItem: FC = () => (
  <UserLayout>
    <div className="bg-userContent pt-14 px-20 min-h-screen">
      <div>
        <h1 className="text-2xl font-bold">Create New Report</h1>
        <div className="flex">
          <Link to="/user/my-reports" className="text-blue-700 underline">
            My Reports
          </Link>
          <img src="./svg/Arrow.svg" alt="arrow" />
          <div>Create New Report</div>
        </div>
      </div>
      <div className="flex justify-center mt-[80px]">
        <ItemsList />
      </div>
    </div>
  </UserLayout>
)
export default ServiceItem
