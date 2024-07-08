'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import type { UserFormType } from '@/types/user.types'
import { userService } from '@/services/user.service'

export function useUpdateProfile() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: UserFormType) => userService.update(data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
