'use client'

import clsx from 'clsx'
import { LoaderCircle, GripVertical, Trash } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'

import { Checkbox } from '@/components/ui/Checkbox'
import { FlatField } from '@/components/ui/FlatField'
import { DatePicker } from '@/components/ui/DatePicker'
import { BadgePicker } from '@/components/ui/BadgePicker'

import { useDeleteTask } from '@/hooks/useDeleteTask'
import { useTaskDebounce } from '@/hooks/useTaskDebounce'

import { PriorityEnum, type ITask, type TaskFormType } from '@/types/task.types'

import classes from './ListForm.module.scss'

interface IListForm {
  item: ITask
  setItems: React.Dispatch<React.SetStateAction<ITask[] | undefined>>
}

export const ListForm = ({ item, setItems }: IListForm) => {
  const { register, watch, control } = useForm<TaskFormType>({
    defaultValues: {
      name: item.name,
      isCompleted: item.isCompleted,
      priority: item.priority,
      createdAt: item.createdAt
    }
  })

  const { mutate: mutateDeleteTask, isPending: isPendingDeleteTask } =
    useDeleteTask()

  useTaskDebounce({ watch, itemId: item.id })

  return (
    <div
      className={clsx(
        classes.container,
        'opacity-animation',
        'slide-animation',
        {
          [classes.loaded]: isPendingDeleteTask
        }
      )}
    >
      {isPendingDeleteTask && <LoaderCircle className={classes.loader} />}
      <span className={classes.head}>
        <button className={clsx(classes.control, classes.grip)}>
          <GripVertical className={classes.icon} />
        </button>
        <Controller
          control={control}
          name='isCompleted'
          render={({ field: { value, onChange } }) => (
            <Checkbox
              checked={value}
              onChange={onChange}
            />
          )}
        />
        <FlatField
          id='name'
          className={clsx({ [classes.completed]: watch('isCompleted') })}
          placeholder='Write something...'
          {...register('name')}
        />
      </span>
      <div className={classes.date}>
        <Controller
          control={control}
          name='createdAt'
          render={({ field: { value, onChange } }) => (
            <DatePicker
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </div>
      <div className={classes.priority}>
        <Controller
          control={control}
          name='priority'
          render={({ field: { value, onChange } }) => (
            <BadgePicker
              items={[
                PriorityEnum.LOW,
                PriorityEnum.MEDIUM,
                PriorityEnum.HIGH
              ].map((item) => ({
                label: item,
                value: item
              }))}
              value={value || undefined}
              onChange={onChange}
            />
          )}
        />
      </div>
      <div className={classes.controls}>
        <button
          className={classes.control}
          onClick={() =>
            item.id
              ? mutateDeleteTask(item.id)
              : setItems((prev) => prev?.slice(0, -1))
          }
        >
          <Trash className={classes.icon} />
        </button>
      </div>
    </div>
  )
}
