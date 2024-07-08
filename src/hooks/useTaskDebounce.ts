'use client'

import React from 'react'

import debounce from 'lodash.debounce'
import type { UseFormWatch } from 'react-hook-form'

import { useCreateTask } from './useCreateTask'
import { useUpdateTask } from './useUpdateTask'

import type { TaskFormType } from '@/types/task.types'

interface IUseDebounceTask {
  itemId: string
  watch: UseFormWatch<TaskFormType>
}

export function useTaskDebounce({ itemId, watch }: IUseDebounceTask) {
  const { mutate: mutateCreateTask } = useCreateTask()
  const { mutate: mutateUpdateTask } = useUpdateTask()

  const createDebounce = React.useCallback(
    debounce((formData: TaskFormType) => {
      mutateCreateTask(formData)
    }, 500),
    []
  )

  const updateDebounce = React.useCallback(
    debounce((formData: TaskFormType) => {
      mutateUpdateTask({ id: itemId, data: formData })
    }, 500),
    []
  )

  React.useEffect(() => {
    const { unsubscribe } = watch((formData) => {
      if (itemId) {
        updateDebounce({
          ...formData,
          priority: formData.priority || undefined
        })
      } else {
        createDebounce(formData)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [createDebounce, updateDebounce, watch()])
}
