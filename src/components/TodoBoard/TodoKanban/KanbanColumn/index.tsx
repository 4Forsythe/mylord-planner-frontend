'use client'

import { Draggable, Droppable } from '@hello-pangea/dnd'

import { KanbanForm } from '@/components/TodoBoard/TodoKanban/KanbanForm'
import { AddTodoButton } from '@/components/AddTodoButton'
import { FILTERS, TableEnum } from '@/components/TodoBoard/table.data'

import type { ITask } from '@/types/task.types'

import { groupUpTodos } from '@/utils/group-todos.utils'

import classes from './KanbanColumn.module.scss'

interface IKanbanColumn {
  label: string
  value: string
  items: ITask[] | undefined
  setItems: React.Dispatch<React.SetStateAction<ITask[] | undefined>>
}

export const KanbanColumn = ({
  label,
  value,
  items,
  setItems
}: IKanbanColumn) => {
  return (
    <Droppable droppableId={value}>
      {(provided) => (
        <div
          className={classes.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className={classes.head}>
            <span className={classes.label}>{label}</span>
          </div>
          {groupUpTodos(items, value)?.map((item, index) => (
            <Draggable
              key={item.id}
              index={index}
              draggableId={item.id}
            >
              {(provided) => (
                <div
                  className={classes.item}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <KanbanForm
                    key={item.id}
                    item={item}
                    setItems={setItems}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          {value !== TableEnum.COMPLETED &&
            !items?.some((item) => !item.id) && (
              <AddTodoButton
                date={FILTERS[value].format()}
                setItems={setItems}
              />
            )}
        </div>
      )}
    </Droppable>
  )
}
