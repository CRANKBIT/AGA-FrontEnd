import { FC } from 'react'
import { Link } from 'react-router-dom'

const MyAccount: FC = () => (
  <Link to="/user/dashboard">
    <div>this is Dashboard</div>
  </Link>
)

export default MyAccount
