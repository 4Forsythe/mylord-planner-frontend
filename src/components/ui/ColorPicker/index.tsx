import clsx from 'clsx'

import classes from './ColorPicker.module.scss'

interface IColorPicker {
  items: { label: string; value: string }[]
  value: string | undefined
  onChange: (value: string) => void
}

export const ColorPicker = ({ items, value, onChange }: IColorPicker) => {
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <button
          className={clsx(classes.item, {
            [classes.active]: item.value === value
          })}
          style={{ backgroundColor: item.value }}
          key={item.value}
          type='button'
          onClick={() => onChange(item.value)}
        />
      ))}
    </div>
  )
}
