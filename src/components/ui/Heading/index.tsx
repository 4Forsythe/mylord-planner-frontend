import { LogoutButton } from '@/components/LogoutButton'

import classes from './Heading.module.scss'

interface IHeading {
  title: string
}

export const Heading = ({ title }: IHeading) => {
  return (
    <header className={classes.container}>
      <div className={classes.inner}>
        <h1 className={classes.text}>{title}</h1>
        <div className={classes.controls}>
          <LogoutButton />
        </div>
      </div>
      <div className={classes.divider} />
    </header>
  )
}
