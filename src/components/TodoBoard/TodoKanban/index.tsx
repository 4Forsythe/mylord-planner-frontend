'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { TABLE } from '@/components/TodoBoard/table.data'
import { KanbanColumn } from '@/components/TodoBoard/TodoKanban/KanbanColumn'

import { useTaskDnd } from '@/hooks/useTaskDnd'
import { useTasks } from '@/hooks/useTasks'

import classes from './TodoKanban.module.scss'

export const TodoKanban = () => {
  const { onDragEnd } = useTaskDnd()
  const { items, setItems } = useTasks()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.container}>
        <div className={classes.board}>
          {TABLE.map((column) => (
            <KanbanColumn
              key={column.property}
              label={column.label}
              value={column.property}
              items={items}
              setItems={setItems}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  )
}
