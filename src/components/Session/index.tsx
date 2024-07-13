'use client'

import clsx from 'clsx'
import { OctagonPause, SquarePower, X } from 'lucide-react'

import { Skeleton } from './Skeleton'
import { Button } from '@/components/ui/Button'
import { SessionRounds } from '@/components/Session/SessionRounds'

import { useTimer } from '@/hooks/useTimer'
import { useTimerActions } from '@/hooks/useTimerActions'
import { useSession } from '@/hooks/useSession'
import { useDeleteSession } from '@/hooks/useDeleteSession'
import { useCreateSession } from '@/hooks/useCreateSession'

import { formatTime } from '@/utils/format-time.utils'

import classes from './Session.module.scss'

export const Session = () => {
  const timer = useTimer()

  const { data: session, taskInterval, isLoading } = useSession(timer)

  const { mutate: mutateCreateSession, isPending: isPendingCreateSession } =
    useCreateSession()
  const { mutate: mutateDeleteSession, isPending: isPendingDeleteSession } =
    useDeleteSession(() => timer.setCountdown(taskInterval))

  const actions = useTimerActions({ rounds: session?.data.rounds, ...timer })
  const isPendingTimer = actions.isPending

  const onCreate = () => {
    mutateCreateSession()
  }

  const onRefresh = () => {
    if (session?.data) {
      timer.setIsRunning(false)
      mutateDeleteSession(session.data.id)
    }
  }

  if (isLoading) {
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
      {!isLoading && (
        <span className={classes.timer}>{formatTime(timer.countdown)}</span>
      )}
      {session?.data ? (
        <>
          <SessionRounds
            round={timer.round}
            rounds={session?.data.rounds}
            onPrevRound={actions.onPrevRound}
            onNextRound={actions.onNextRound}
          />
          <button
            className={classes.control}
            onClick={timer.isRunning ? actions.onPause : actions.onPlay}
            disabled={isPendingTimer}
          >
            {timer.isRunning ? (
              <OctagonPause className={classes.icon} />
            ) : (
              <SquarePower className={classes.icon} />
            )}
          </button>
          <button
            className={classes.refresh}
            onClick={onRefresh}
            disabled={isPendingDeleteSession}
          >
            <X className={classes.icon} />
          </button>
        </>
      ) : (
        <Button
          className='mt-1.5'
          onClick={onCreate}
          disabled={isPendingCreateSession}
        >
          Create session
        </Button>
      )}
    </div>
  )
}
