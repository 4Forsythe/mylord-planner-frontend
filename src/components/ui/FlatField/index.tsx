import { type InputHTMLAttributes, forwardRef } from 'react'

import clsx from 'clsx'

import classes from './FlatField.module.scss'

interface IFlatField extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: string
  variant?: 'contained' | 'outlined'
  className?: string
  type?: 'number' | 'text' | 'email' | 'password'
  disabled?: boolean
  placeholder: string
}

export const FlatField = forwardRef<HTMLInputElement, IFlatField>(
  (
    {
      id,
      label,
      error,
      variant = 'contained',
      className,
      type = 'text',
      placeholder,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <div className={classes.container}>
          <input
            className={clsx(classes.element, className)}
            ref={ref}
            type={type !== 'number' ? type : 'text'}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete='off'
            {...rest}
          />
        </div>
        {error && <span className={classes.error}>{error}</span>}
      </>
    )
  }
)

FlatField.displayName = 'FlatField'
