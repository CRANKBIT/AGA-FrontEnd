import { FC } from 'react'
import { Link } from 'react-router-dom'

const Dashboard: FC = () => (
  <Link to="/user/my-reports">
    <div>Click here to reports page</div>
  </Link>
)

export default Dashboard
