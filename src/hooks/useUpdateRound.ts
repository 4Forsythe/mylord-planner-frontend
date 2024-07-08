'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import type { SessionRoundFormType } from '@/types/session.types'
import { sessionService } from '@/services/session.service'

export function useUpdateRound() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['update round'],
    mutationFn: ({ id, data }: { id: string; data: SessionRoundFormType }) =>
      sessionService.updateRound(id, data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['daily session'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
