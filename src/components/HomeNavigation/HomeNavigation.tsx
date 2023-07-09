import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button, { Variant } from '@/components/Button'

import axios from '@/utils/axios'

const HomeNavigation: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkLoggedInStatus = async (): Promise<void> => {
      const token = window.localStorage.getItem('token')
      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
      } else {
        delete axios.defaults.headers.common.Authorization
      }
      try {
        const response = await axios.get('/api/v1/tenant/check-login')
        const { loggedIn } = response.data
        console.log('Logged In:', loggedIn)
        setIsLoggedIn(loggedIn)
      } catch (error) {
        console.log('Failed to check login status:', error)
      }
    }

    checkLoggedInStatus()
  }, [])

  const handleLogout = async (): Promise<void> => {
    try {
      await axios.post('/api/v1/auth/logout')
      setIsLoggedIn(false)
      window.localStorage.removeItem('token')
      delete axios.defaults.headers.common.Authorization
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <nav>
      <div className="flex justify-between pt-7 mx-[120px] text-white">
        <div className="flex gap-10 items-center">
          <Link to="/" className="flex items-center gap-2">
            <img width={32} src="./logo.svg" alt="Logo" />
            Report Builder
          </Link>
          <Link to="/products">Products</Link>
          <Link to="/features">Features</Link>
          <Link to="/support">Support</Link>
        </div>

        <div className="flex gap-9">
          <Link to="/buy">
            <Button variant={Variant.Primary}>Buy</Button>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/account">
                <Button variant={Variant.Primary} className="border border-primary">
                  My Account
                </Button>
              </Link>
              <Button variant={Variant.Primary} className="border border-primary" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to="/auth/login">
              <Button variant={Variant.Primary} className="border border-primary">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default HomeNavigation
