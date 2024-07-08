'use client'

import { useSettings } from './useSettings'
import { useUpdateRound } from './useUpdateRound'

import type { ISessionRound } from '@/types/session.types'

interface IUseTimerActions {
  round: ISessionRound | undefined
  rounds: ISessionRound[] | undefined
  countdown: number
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
  setRound: React.Dispatch<React.SetStateAction<ISessionRound | undefined>>
}

export function useTimerActions({
  round,
  rounds,
  countdown,
  setIsRunning,
  setRound
}: IUseTimerActions) {
  const { data: settings } = useSettings()
  const { mutate: mutateUpdateRound, isPending } = useUpdateRound()

  const onPlay = () => setIsRunning(true)

  const onPause = () => {
    setIsRunning(false)

    if (round?.id) {
      mutateUpdateRound({
        id: round?.id,
        data: {
          seconds: countdown,
          isCompleted: Math.floor(countdown / 60) >= settings.taskInterval
        }
      })
    }
  }

  const onPrevRound = () => {
    const lastCompletedRound = rounds?.findLast((round) => round.isCompleted)

    if (!lastCompletedRound?.id) return

    mutateUpdateRound({
      id: lastCompletedRound.id,
      data: {
        seconds: 0,
        isCompleted: false
      }
    })

    setRound(lastCompletedRound)
  }

  const onNextRound = () => {
    if (!round?.id) return

    mutateUpdateRound({
      id: round?.id,
      data: {
        seconds: settings.taskInterval * 60,
        isCompleted: true
      }
    })
  }

  return { onPlay, onPause, onPrevRound, onNextRound, isPending }
}
