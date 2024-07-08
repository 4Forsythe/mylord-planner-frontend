'use client'

import React from 'react'

import { useQuery } from '@tanstack/react-query'

import type { ITask } from '@/types/task.types'
import { taskService } from '@/services/task.service'

export function useTasks() {
  const { data, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => taskService.getAll()
  })

  const [items, setItems] = React.useState<ITask[] | undefined>(data?.data)

  React.useEffect(() => {
    setItems(data?.data)
  }, [data?.data])

  return { items, setItems, isLoading }
}
