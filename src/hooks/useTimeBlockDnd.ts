'use client'

import React from 'react'

import {
  DragEndEvent,
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useQueryClient, useMutation } from '@tanstack/react-query'

import type { ITimeBlock } from '@/types/time-block.types'
import { timeBlockService } from '@/services/time-block.service'

export function useTimeBlockDnd(
  items: ITimeBlock[] | undefined,
  setItems: React.Dispatch<React.SetStateAction<ITimeBlock[] | undefined>>
) {
  const queryClient = useQueryClient()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  )

  const { mutate } = useMutation({
    mutationKey: ['update time-block order'],
    mutationFn: (ids: string[]) => timeBlockService.updateOrder(ids),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
    }
  })

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id && items) {
      const oldId = items.findIndex((item) => item.id === active.id)
      const newId = items.findIndex((item) => item.id === (over?.id || ''))

      if (oldId !== -1 && newId !== -1) {
        const sortableItems = arrayMove(items, oldId, newId)

        setItems(sortableItems)
        mutate(sortableItems.map((item) => item.id))
      }
    }
  }

  return { onDragEnd, sensors }
}
