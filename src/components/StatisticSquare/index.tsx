import clsx from 'clsx'

import classes from './StatisticSquare.module.scss'

interface IStatisticSquare {
  property: string
  count: number
}

export const StatisticSquare = ({ property, count }: IStatisticSquare) => {
  return (
    <div
      className={clsx(
        classes.container,
        'opacity-animation',
        'slide-animation'
      )}
    >
      <span className={clsx(classes.score, { [classes.grow]: count > 0 })}>
        {count}
      </span>
      <p className={classes.label}>{property}</p>
    </div>
  )
}
