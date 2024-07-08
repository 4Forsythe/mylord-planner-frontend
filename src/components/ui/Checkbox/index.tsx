import type { InputHTMLAttributes } from 'react'

import classes from './Checkbox.module.scss'

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  name?: string
}

export const Checkbox = ({ id, name, ...rest }: ICheckbox) => {
  return (
    <input
      className={classes.element}
      id={id}
      name={name}
      type='checkbox'
      {...rest}
    />
  )
}
