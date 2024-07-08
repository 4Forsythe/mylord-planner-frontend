'use client'

import { DropResult } from '@hello-pangea/dnd'

import { TableEnum, FILTERS } from '@/components/TodoBoard/table.data'

import { useUpdateTask } from './useUpdateTask'

export function useTaskDnd() {
  const { mutate } = useUpdateTask()

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const columnId = result.destination.droppableId

    if (columnId === result.source.droppableId) return

    if (columnId === TableEnum.COMPLETED) {
      mutate({
        id: result.draggableId,
        data: {
          isCompleted: true
        }
      })

      return
    }

    const createdAt = FILTERS[columnId].format()

    mutate({
      id: result.draggableId,
      data: {
        createdAt,
        isCompleted: false
      }
    })
  }

  return { onDragEnd }
}
