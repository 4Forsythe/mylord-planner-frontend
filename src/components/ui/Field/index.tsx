'use client'

import { type InputHTMLAttributes, forwardRef } from 'react'

import clsx from 'clsx'

import classes from './Field.module.scss'

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: string
  variant?: 'contained' | 'outlined'
  type?: 'number' | 'text' | 'password'
  disabled?: boolean
  placeholder: string
}

export const Field = forwardRef<HTMLInputElement, IField>(
  (
    {
      id,
      label,
      error,
      variant = 'contained',
      type = 'text',
      placeholder,
      disabled,
      ...rest
    },
    ref
  ) => {
    const allowOnlyNumbers = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        type === 'number' &&
        !/[0-9]/.test(event.key) &&
        event.key !== 'Tab' &&
        event.key !== 'Backspace' &&
        event.key !== 'Enter' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight'
      ) {
        event.preventDefault()
      }
    }

    return (
      <>
        <div className={classes.container}>
          {label && (
            <label
              htmlFor={id}
              className={classes.label}
            >
              {label}
            </label>
          )}
          <input
            id={id}
            className={clsx(classes.element, {
              [classes.contained]: variant === 'contained',
              [classes.outlined]: variant === 'outlined',
              [classes.danger]: error
            })}
            ref={ref}
            type={type !== 'number' ? type : 'text'}
            disabled={disabled}
            placeholder={placeholder}
            onKeyDown={allowOnlyNumbers}
            autoComplete='off'
            {...rest}
          />
        </div>
        {error && <span className={classes.error}>{error}</span>}
      </>
    )
  }
)

Field.displayName = 'Field'
