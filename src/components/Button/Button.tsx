import { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  Primary,
}

export interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: FC<Props> = ({ children, className, variant = Variant.Primary, type = 'button' }) => (
  <button
    type={type}
    className={classNames(
      'disabled:opacity-20',
      'disabled:grayscale',
      'disabled:cursor-not-allowed',
      'rounded-md',
      'px-4',
      'py-1',
      variant === Variant.Primary && ['bg-background', 'text-primary'],
      className
    )}
  >
    {children}
  </button>
)

export default Button
