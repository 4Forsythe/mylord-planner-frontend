'use client'

import { useQueryClient, useMutation } from '@tanstack/react-query'

import type { TaskFormType } from '@/types/task.types'
import { taskService } from '@/services/task.service'

export function useUpdateTask(key?: string) {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['update task', key],
    mutationFn: ({ id, data }: { id: string; data: TaskFormType }) =>
      taskService.update(id, data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }
  })

  return { mutate, isPending, isSuccess }
}
