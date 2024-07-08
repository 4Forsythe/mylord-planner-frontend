'use client'

import { useQuery } from '@tanstack/react-query'

import { settingService } from '@/services/setting.service'

export function useSettings() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['settings'],
    queryFn: () => settingService.getSettings()
  })

  const taskInterval = data?.taskInterval ?? 25
  const breakInterval = data?.breakInterval ?? 5
  const intervals = data?.intervals ?? 7 * 60

  const settings = {
    ...data,
    taskInterval,
    breakInterval,
    intervals
  }

  return { data: settings, isLoading, isSuccess }
}
