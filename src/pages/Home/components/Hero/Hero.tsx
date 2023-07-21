import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/Button/Button'

const Hero: FC = () => (
  <div className="text-center py-40 text-white">
    <img className="mx-auto" src="./svg/heroImage.svg" alt="HeroImage" />
    <p className="text-4xl text-center mb-11">
      Unleash the Power of Mechanic:
      <br />
      Elevate Your Reports to Perfection!
    </p>
    <Button className='bg-blue-600'>
      <Link className="text-xl" to="/auth/signup">
        Get started by creating an account for FREE!
      </Link>
    </Button>
  </div>
)

export default Hero
