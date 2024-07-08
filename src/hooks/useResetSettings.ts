'use client'

import { toast } from 'sonner'
import { useQueryClient, useMutation } from '@tanstack/react-query'

import { settingService } from '@/services/setting.service'

export function useResetSettings() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['update settings'],
    mutationFn: () => settingService.reset(),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['settings'] })
      toast.success('Successful settings reset')
    }
  })

  return { mutate, isPending, isSuccess }
}
