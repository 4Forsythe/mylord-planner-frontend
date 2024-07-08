'use client'

import React from 'react'

import { useQuery } from '@tanstack/react-query'

import { useSettings } from './useSettings'

import type { ISessionRound } from '@/types/session.types'
import { sessionService } from '@/services/session.service'

interface IUseSession {
  setRound: React.Dispatch<React.SetStateAction<ISessionRound | undefined>>
  setCountdown: React.Dispatch<React.SetStateAction<number>>
}

export function useSession({ setRound, setCountdown }: IUseSession) {
  const { data: settings } = useSettings()
  const taskInterval = settings.taskInterval * 60

  const { data, refetch, isLoading, isSuccess } = useQuery({
    queryKey: ['daily session'],
    queryFn: () => sessionService.getDailySession()
  })

  const rounds = data?.data.rounds

  React.useEffect(() => {
    if (isSuccess && rounds) {
      const curRound = rounds.find((round) => !round.isCompleted)
      setRound(curRound)

      if (curRound && curRound.seconds !== 0) {
        setCountdown(curRound.seconds)
      }
    }
  }, [rounds, isSuccess])

  return { data, taskInterval, refetch, isLoading, isSuccess }
}
