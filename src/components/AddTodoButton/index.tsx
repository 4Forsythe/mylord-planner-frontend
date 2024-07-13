'use client'

import type { ITask } from '@/types/task.types'

import classes from './AddTodoButton.module.scss'

interface IAddTodoButton {
  date: string
  setItems: React.Dispatch<React.SetStateAction<ITask[] | undefined>>
}

export const AddTodoButton = ({ date, setItems }: IAddTodoButton) => {
  const onAdd = () => {
    setItems((prev) => {
      if (!prev) return

      return [
        ...prev,
        {
          id: '',
          name: '',
          isCompleted: false,
          createdAt: date,
          updatedAt: date
        }
      ]
    })
  }

  return (
    <div className={classes.container}>
      <button
        className={classes.element}
        onClick={onAdd}
      >
        Add new todo...
      </button>
    </div>
  )
}
