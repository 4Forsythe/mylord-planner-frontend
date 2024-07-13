'use client'

import { Skeleton } from './Skeleton'
import { TodoList } from './TodoList'
import { TodoKanban } from './TodoKanban'
import { TodoSwitcher } from './TodoSwitcher'

import { useLocalStorage } from '@/hooks/useLocalStorage'

import classes from './TodoBoard.module.scss'

export type TodoBoardType = 'list' | 'kanban'

export const TodoBoard = () => {
  const [mode, setMode, isLoading] = useLocalStorage<TodoBoardType>({
    key: 'board-type',
    defaultValue: 'list'
  })

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <div className={classes.container}>
      <TodoSwitcher
        mode={mode}
        setMode={setMode}
      />
      {mode === 'list' ? <TodoList /> : <TodoKanban />}
    </div>
  )
}
