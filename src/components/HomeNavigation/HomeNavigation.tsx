import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button, { Variant } from '@/components/Button'

import axios from '@/utils/axios'

const HomeNavigation: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkLoggedInStatus = async (): Promise<void> => {
      // 检查本地存储中的令牌
      const storedToken = localStorage.getItem('token')
      if (storedToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`
        try {
          const response = await axios.get('/api/v1/tenant/is-logged-in')
          const { isLoggedIn: loggedInStatus } = response.data
          setIsLoggedIn(loggedInStatus)
        } catch (error) {
          console.error('Failed to check login status:', error)
        }
      }

      setIsLoading(false)
    }

    checkLoggedInStatus()
  }, [])

  const handleLogout = (): void => {
    // 从本地存储中移除令牌
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  if (isLoading) {
    return <div>Loading...</div>
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
