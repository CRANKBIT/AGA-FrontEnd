import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import Container from '@/layouts/Container'
import FileLogo from '@/components/FileLogo'
import SideNavigation from '@/components/SideNavigation'

interface Props {
  children: ReactNode
  variant: PageVariant
}

export enum PageVariant {
  AuthPage,
  UserPage,
}

const FlexLayout: FC<Props> = ({ children, variant }) => (
  <Container className="flex min-h-screen">
    <div
      className={classNames(
        'bg-background',
        'text-white',
        variant === PageVariant.AuthPage && ['w-1/2 flex items-center'],
        variant === PageVariant.UserPage && ['w-[305px]']
      )}
    >
      {variant === PageVariant.AuthPage && (
        <div className="px-64 py-80 text-center">
          <FileLogo className="w-20 h-24">
            <div className="text-xl">Form Builder</div>
          </FileLogo>
        </div>
      )}
      {variant === PageVariant.UserPage && <SideNavigation />}
    </div>
    <div className="flex-grow flex">
      <div className="py-60 w-[640px] flex items-center justify-center bg-white">
        <div className="w-[280px]">{children}</div>
      </div>
    </div>
  </Container>
)

export default FlexLayout
