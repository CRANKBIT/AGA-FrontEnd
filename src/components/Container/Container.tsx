import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export enum Size {
  Default,
}

export enum Space {
  Default,
}

interface Props {
  children: ReactNode
  className?: string
  size?: Size
  space?: Space
}

const Container: FC<Props> = ({
  size = Size.Default,
  space = Space.Default,
  children,
  className = undefined,
}) => (
  <div
    className={classNames(
      size === Size.Default && 'min-w-[390px] md:max-w-container',
      space === Space.Default && ['px-6', 'md:px-9'],
      'mx-auto',
      className
    )}
  >
    {children}
  </div>
)

export default Container
