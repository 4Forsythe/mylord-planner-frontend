'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import type { SettingFormType } from '@/types/setting.types'
import { settingService } from '@/services/setting.service'

export function useUpdateSettings() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['update settings'],
    mutationFn: (data: SettingFormType) => settingService.update(data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['settings'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
