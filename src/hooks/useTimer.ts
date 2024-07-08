'use client'

import React from 'react'

import { useSettings } from './useSettings'

import type { ISessionRound } from '@/types/session.types'

export function useTimer() {
  const { data: settings, isLoading } = useSettings()

  const [isRunning, setIsRunning] = React.useState(false)
  const [isBreaking, setIsBreaking] = React.useState(false)

  const [round, setRound] = React.useState<ISessionRound>()
  const [countdown, setCountdown] = React.useState(settings.taskInterval * 60)

  React.useEffect(() => {
    if (isLoading) return
    setCountdown(settings.taskInterval * 60)
  }, [settings.taskInterval, isLoading])

  React.useEffect(() => {
    if (isLoading) return

    let interval: NodeJS.Timeout | null = null

    if (isRunning) {
      interval = setInterval(() => {
        setCountdown((countdown) => countdown - 1)
      }, 1000)
    } else if (!isRunning && countdown < 0 && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, round, countdown, settings.taskInterval])

  React.useEffect(() => {
    if (isLoading) return
    if (countdown > 0) return

    setIsBreaking(!isBreaking)
    setCountdown(
      (isBreaking ? settings.taskInterval : settings.breakInterval) * 60
    )
  }, [isBreaking, countdown, settings.taskInterval, settings.breakInterval])

  return {
    round,
    countdown,
    isRunning,
    setIsRunning,
    setRound,
    setCountdown,
    isLoading
  }
}
