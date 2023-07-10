import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import navItems from '@/constants/navItems'
import NavItem from '@/components/NavItem'
import FileLogo from '@/components/FileLogo'

interface Props {
  isCompanySide?: boolean
}

const SideNavigation: FC<Props> = ({ isCompanySide = false }) => {
  const location = useLocation()
  const [currentActive, setCurrentActive] = useState<string | null>(location.pathname)

  return (
    <div className="w-[305px]">
      {isCompanySide ? (
        <>
          <FileLogo className="my-10 h-8 ml-14" />
          <FileLogo className="my-10 h-[100px] mx-auto" />
          <div className="flex flex-col mb-[67px]">
            {navItems.map(({ id, href, label }) => (
              <NavItem
                key={id}
                href={href}
                label={label}
                active={currentActive === href}
                onMouseEnter={() => setCurrentActive(href)}
                onMouseLeave={() => setCurrentActive(null)}
              />
            ))}
          </div>
          <div className="text-lg pl-14 mb-2">
            <Link to="/user/my-profile">My Profile</Link>
          </div>
          <div className="text-sm pl-14 text-[#7C7C81]">
            <Link to="/auth/logout">Logout</Link>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <FileLogo className="h-[100px]" />
        </div>
      )}
    </div>
  )
}

export default SideNavigation
