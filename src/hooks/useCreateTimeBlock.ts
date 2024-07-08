'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import type { TimeBlockFormType } from '@/types/time-block.types'
import { timeBlockService } from '@/services/time-block.service'

export function useCreateTimeBlock() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['create time-block'],
    mutationFn: (data: TimeBlockFormType) => timeBlockService.create(data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
