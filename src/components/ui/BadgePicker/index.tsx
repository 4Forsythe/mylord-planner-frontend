import { Badge } from '@/components/ui/Badge'

import classes from './BadgePicker.module.scss'

interface IBadgePicker {
  items: { label: string; value: string }[]
  value: string | undefined
  onChange: (value: string) => void
}

export const BadgePicker = ({ items, value, onChange }: IBadgePicker) => {
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <button
          className={classes.item}
          key={item.value}
          onClick={() => onChange(item.value)}
        >
          <Badge variant={value === item.value ? 'contained' : 'outlined'}>
            {item.label}
          </Badge>
        </button>
      ))}
    </div>
  )
}
