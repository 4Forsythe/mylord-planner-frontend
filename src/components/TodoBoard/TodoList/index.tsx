'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { TABLE } from '@/components/TodoBoard/table.data'
import { ListRow } from '@/components/TodoBoard/TodoList/ListRow'

import { useTaskDnd } from '@/hooks/useTaskDnd'
import { useTasks } from '@/hooks/useTasks'

import classes from './TodoList.module.scss'

export const TodoList = () => {
  const { onDragEnd } = useTaskDnd()
  const { items, setItems } = useTasks()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.container}>
        <div className={classes.list}>
          {TABLE.map((row) => (
            <ListRow
              key={row.property}
              label={row.label}
              value={row.property}
              items={items}
              setItems={setItems}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  )
}
