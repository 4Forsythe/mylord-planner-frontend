'use client'

import { StatisticSquare } from '@/components/StatisticSquare'
import { Skeleton } from '@/components/StatisticSquare/Skeleton'

import { useProfile } from '@/hooks/useProfile'

import classes from './Statistics.module.scss'

export const Statistics = () => {
  const { data, isLoading } = useProfile()

  return (
    <div className={classes.container}>
      {isLoading || !data?.statistics ? (
        <div className={classes.panel}>
          {[...new Array(4)].map((item, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div className={classes.panel}>
          {data.statistics.map((statistic, index) => (
            <StatisticSquare
              key={index}
              {...statistic}
            />
          ))}
        </div>
      )}
    </div>
  )
}
