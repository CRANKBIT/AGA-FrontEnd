import { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  Default,
  Primary,
}

export interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: FC<Props> = ({ children, className, variant = Variant.Default, type = 'button' }) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={classNames(
      'disabled:opacity-20',
      'disabled:grayscale',
      'disabled:cursor-not-allowed',
      'rounded-md',
      'px-4',
      'py-1',
      variant === Variant.Default && ['bg-background', 'text-primary'],
      variant === Variant.Primary && ['bg-background', 'text-on-primary'],
      className
    )}
  >
    {children}
  </button>
)

export default Button
