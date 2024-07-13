'use client'

import clsx from 'clsx'
import { ListFilter, Kanban } from 'lucide-react'

import type { TodoBoardType } from '@/components/TodoBoard'

import classes from './TodoSwitcher.module.scss'

interface ITodoSwitcher {
  mode: TodoBoardType
  setMode: (value: TodoBoardType) => void
}

export const TodoSwitcher = ({ mode, setMode }: ITodoSwitcher) => {
  return (
    <div className={classes.container}>
      <button
        className={clsx(classes.control, {
          [classes.selected]: mode === 'list'
        })}
        onClick={() => setMode('list')}
      >
        <ListFilter className={classes.icon} />
        List
      </button>
      <button
        className={clsx(classes.control, {
          [classes.selected]: mode === 'kanban'
        })}
        onClick={() => setMode('kanban')}
      >
        <Kanban className={classes.icon} />
        Kanban
      </button>
    </div>
  )
}
