'use client'

import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'
import { LoaderCircle, GripVertical, Settings, CircleX } from 'lucide-react'

import { useDeleteTimeBlock } from '@/hooks/useDeleteTimeBlock'
import { useTimeBlockSortable } from '@/hooks/useTimeBlockSortable'

import { COLORS } from '../TimeBlockForm/colors.data'

import type { ITimeBlock, TimeBlockFormType } from '@/types/time-block.types'

import classes from './TimeBlock.module.scss'

export const TimeBlock = ({ item }: { item: ITimeBlock }) => {
  const { reset } = useFormContext<TimeBlockFormType>()

  const { attributes, listeners, style, setNodeRef } = useTimeBlockSortable(
    item.id
  )

  const { mutate, isPending } = useDeleteTimeBlock()

  const onUpdate = () => {
    reset({
      id: item.id,
      color: item.color,
      duration: item.duration,
      name: item.name,
      order: item.order
    })
  }

  const onDelete = () => {
    mutate(item.id)
  }

  return (
    <div
      ref={setNodeRef}
      className={clsx(classes.container, 'opacity-animation', {
        [classes.loaded]: isPending
      })}
      style={{
        ...style,
        backgroundColor: item.color || COLORS[0]
      }}
    >
      {isPending && <LoaderCircle className={classes.loader} />}
      <div className={clsx(classes.element)}>
        <button
          {...attributes}
          {...listeners}
          className={classes.grip}
          disabled={isPending}
        >
          <GripVertical className={classes.icon} />
        </button>
        <div className={classes.todo}>
          <span className={classes.text}>
            {item.name || 'Untitled timeline'}
          </span>
          <i className={classes.duration}>{`${item.duration} min.`}</i>
        </div>
        <div className={classes.controls}>
          <button
            className={clsx(classes.control, 'hover:animate-spin')}
            onClick={onUpdate}
            disabled={isPending}
          >
            <Settings className={classes.icon} />
          </button>
          <button
            className={classes.control}
            onClick={onDelete}
            disabled={isPending}
          >
            <CircleX className={classes.icon} />
          </button>
        </div>
      </div>
    </div>
  )
}
