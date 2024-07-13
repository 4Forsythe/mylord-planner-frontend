'use client'

import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { Skeleton } from './Skeleton'
import { TimeBlock } from '@/components/TimeBlockBoard/TimeBlock'

import { useTimeBlocks } from '@/hooks/useTimeBlocks'
import { useTimeBlockDnd } from '@/hooks/useTimeBlockDnd'

import { sumLeftTime } from '@/utils/sum-left-time.utils'

import classes from './TimeBlockList.module.scss'

export const TimeBlockList = () => {
  const { items, setItems, isLoading } = useTimeBlocks()
  const { onDragEnd, sensors } = useTimeBlockDnd(items, setItems)

  const leftTime = sumLeftTime(items)

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <div className={classes.container}>
      <DndContext
        sensors={sensors}
        onDragEnd={onDragEnd}
        collisionDetection={closestCenter}
      >
        <div className={classes.list}>
          <SortableContext
            items={items || []}
            strategy={verticalListSortingStrategy}
          >
            {items?.length ? (
              items.map((item) => (
                <TimeBlock
                  item={item}
                  key={item.id}
                />
              ))
            ) : (
              <span className={classes.spoiler}>
                No active time-blocks out here...
              </span>
            )}
          </SortableContext>
        </div>
        <span className={classes.time}>
          {leftTime > 0
            ? `${leftTime} hours out for sleep`
            : 'Have not time for sleep'}
        </span>
      </DndContext>
    </div>
  )
}
