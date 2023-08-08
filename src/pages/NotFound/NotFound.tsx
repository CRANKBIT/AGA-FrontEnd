import { FC } from 'react'
import Button from '@/components/Button/Button'

const NotFound: FC = () => (
  <div className="h-screen">
    <div className="flex justify-center">
      <h1 className="text-9xl">404 Not Found</h1>
    </div>
    <div className="flex justify-center">
      <p className='text-red-500'>Please Check your domain name! </p>
    </div>
    <div className="flex justify-center">
      <Button className="bg-blue-600">
        <a className="text-xl " href="/">
          Back to Home Page
        </a>
      </Button>
    </div>
  </div>
)

export default NotFound
