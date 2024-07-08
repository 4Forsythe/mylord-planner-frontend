'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import { timeBlockService } from '@/services/time-block.service'

export function useDeleteTimeBlock() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['delete task'],
    mutationFn: (id: string) => timeBlockService.remove(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
