'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import type { TimeBlockFormType } from '@/types/time-block.types'
import { timeBlockService } from '@/services/time-block.service'

export function useUpdateTimeBlock(key?: string) {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['update time-block', key],
    mutationFn: ({ id, data }: { id: string; data: TimeBlockFormType }) =>
      timeBlockService.update(id, data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
