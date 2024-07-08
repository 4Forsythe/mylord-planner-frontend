'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import { sessionService } from '@/services/session.service'

export function useCreateSession() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['create session'],
    mutationFn: () => sessionService.create(),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['daily session'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
