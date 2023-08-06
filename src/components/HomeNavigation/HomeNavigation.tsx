import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button, { Variant } from '@/components/Button'

const HomeNavigation: FC = () => {
  const navigate = useNavigate()
  const handleScrollToFeatures = (): void => {
    const element = document.getElementById('Features')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const handleScrollToProducts = (): void => {
    const element = document.getElementById('Pricing')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const handleScrollToContact = (): void => {
    const element = document.getElementById('Contact')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav>
      <div className="flex justify-between pt-7 mx-[120px] text-white">
        <Link to="/" className="flex items-center gap-2 ">
          <img width={32} src="./logo.svg" />
          Report Builder
        </Link>
        <div className="flex gap-10 items-center">
          <Link to="/" onClick={handleScrollToProducts}>
            Products
          </Link>
          <Link to="/" onClick={handleScrollToFeatures}>
            Features
          </Link>
          <Link to="/" onClick={handleScrollToContact}>
            Support
          </Link>
        </div>

        <div className="flex gap-9">
          <Button variant={Variant.Primary} onClick={() => navigate('/account')}>
            My Account
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default HomeNavigation
