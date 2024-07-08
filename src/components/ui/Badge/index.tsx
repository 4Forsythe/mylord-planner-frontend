import type { PropsWithChildren } from 'react'

import clsx from 'clsx'

import classes from './Badge.module.scss'

interface IBadge {
  className?: string
  variant?: 'contained' | 'outlined'
}

export const Badge = ({
  children,
  className,
  variant = 'outlined'
}: PropsWithChildren<IBadge>) => {
  return (
    <span
      className={clsx(classes.element, className, {
        [classes.contained]: variant === 'contained',
        [classes.outlined]: variant === 'outlined'
      })}
    >
      {children}
    </span>
  )
}
