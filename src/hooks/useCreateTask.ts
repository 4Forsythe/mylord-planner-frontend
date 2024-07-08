'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import type { TaskFormType } from '@/types/task.types'
import { taskService } from '@/services/task.service'

export function useCreateTask() {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['create task'],
    mutationFn: (data: TaskFormType) => taskService.create(data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
