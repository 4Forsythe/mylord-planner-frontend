'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import { sessionService } from '@/services/session.service'

export function useDeleteSession(onSuccessDelete: () => void) {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['delete session'],
    mutationFn: (id: string) => sessionService.remove(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['daily session'] })
      onSuccessDelete()
    }
  })

  return { mutate, isPending, isSuccess }
}
