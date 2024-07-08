import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'

import classes from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined'
  isLoading?: boolean
}

export const Button = ({
  children,
  className,
  variant = 'contained',
  isLoading,
  disabled,
  ...rest
}: PropsWithChildren<IButton>) => {
  return (
    <button
      className={clsx(classes.element, className, {
        [classes.contained]: variant === 'contained',
        [classes.outlined]: variant === 'outlined',
        [classes.loaded]: isLoading
      })}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  )
}
