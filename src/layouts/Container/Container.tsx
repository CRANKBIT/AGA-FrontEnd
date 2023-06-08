import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export enum Size {
  Default,
}

interface Props {
  children: ReactNode
  className?: string
  size?: Size
}

const Container: FC<Props> = ({ size = Size.Default, children, className = undefined }) => (
  <div
    className={classNames(
      size === Size.Default && 'min-w-[390px] max-w-container',
      'mx-auto',
      className
    )}
  >
    {children}
  </div>
)

export default Container
