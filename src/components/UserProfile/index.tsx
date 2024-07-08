'use client'

import clsx from 'clsx'

import { Skeleton } from './Skeleton'

import { useProfile } from '@/hooks/useProfile'

import classes from './UserProfile.module.scss'

export const UserProfile = () => {
  const { data, isLoading } = useProfile()

  if (isLoading || !data) {
    return <Skeleton />
  }

  return (
    <div
      className={clsx(
        classes.container,
        'opacity-animation',
        'slide-animation'
      )}
    >
      <div className={classes.avatar}>
        <span className={classes.initials}>
          {data.user.name?.charAt(0) || data.user.email.charAt(0)}
        </span>
      </div>
      <div className={classes.info}>
        <span className={classes.name}>{data.user.name || 'Anonymous'}</span>
        <p className={classes.email}>{data.user.email}</p>
      </div>
    </div>
  )
}
