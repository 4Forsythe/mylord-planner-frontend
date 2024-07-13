'use client'

import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import type { ISessionRound } from '@/types/session.types'

import classes from './SessionRounds.module.scss'

interface ISessionRounds {
  round: ISessionRound | undefined
  rounds: ISessionRound[] | undefined
  onPrevRound: () => void
  onNextRound: () => void
}

export const SessionRounds = ({
  round,
  rounds,
  onPrevRound,
  onNextRound
}: ISessionRounds) => {
  const isRollBack = rounds ? rounds.some((round) => round.isCompleted) : false
  const isRollNext = rounds ? !rounds[rounds.length - 1].isCompleted : false

  return (
    <div className={classes.container}>
      <button
        className={classes.control}
        onClick={() => isRollBack && onPrevRound()}
        disabled={!isRollBack}
      >
        <ChevronLeft className={classes.icon} />
      </button>
      <div className={classes.bar}>
        {rounds &&
          rounds.map((round, index) => (
            <span
              key={index}
              className={clsx(classes.indicator, {
                [classes.active]: round.id === round?.id && !round.isCompleted,
                [classes.completed]: round.isCompleted
              })}
            />
          ))}
      </div>
      <button
        className={classes.control}
        onClick={() => isRollNext && onNextRound()}
        disabled={!isRollNext}
      >
        <ChevronRight className={classes.icon} />
      </button>
    </div>
  )
}
