import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '@/assets/Logo.png'

import { DASHBOARD_ROUTE } from '@/config/routes.config'

import classes from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={classes.container}>
      <Link
        className={classes.link}
        href={DASHBOARD_ROUTE.HOME}
      >
        <Image
          className={classes.image}
          src={LogoImage}
          width={80}
          height={80}
          priority
          alt='Logo'
        />
        <div className={classes.text}>
          <div className={classes.super}>
            <h1 className={classes.title}>MyLord</h1>
            <span className={classes.spoiler}>Beta</span>
          </div>
          <span className={classes.slogan}>Planner</span>
        </div>
      </Link>
    </div>
  )
}
