'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import { taskService } from '@/services/task.service'

export function useDeleteTask() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['delete task'],
    mutationFn: (id: string) => taskService.remove(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
