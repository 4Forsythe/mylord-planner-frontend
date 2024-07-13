import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import { TableEnum, FILTERS } from '@/components/TodoBoard/table.data'

import type { ITask } from '@/types/task.types'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export const groupUpTodos = (tasks: ITask[] | undefined, value: string) => {
  switch (value) {
    case TableEnum.TODAY:
      return tasks?.filter(
        (item) =>
          dayjs(item.createdAt).isSame(FILTERS.today, 'day') &&
          !item.isCompleted
      )

    case TableEnum.TOMORROW:
      return tasks?.filter(
        (item) =>
          dayjs(item.createdAt).isSame(FILTERS.tomorrow, 'day') &&
          !item.isCompleted
      )

    case TableEnum.THIS_WEEK:
      return tasks?.filter(
        (item) =>
          !dayjs(item.createdAt).isSame(FILTERS.today, 'day') &&
          !dayjs(item.createdAt).isSame(FILTERS.tomorrow, 'day') &&
          dayjs(item.createdAt).isSameOrBefore(FILTERS.thisWeek) &&
          !item.isCompleted
      )

    case TableEnum.NEXT_WEEK:
      return tasks?.filter(
        (item) =>
          !dayjs(item.createdAt).isSame(FILTERS.tomorrow, 'day') &&
          dayjs(item.createdAt).isAfter(FILTERS.thisWeek) &&
          dayjs(item.createdAt).isSameOrBefore(FILTERS.nextWeek) &&
          !item.isCompleted
      )

    case TableEnum.LATER:
      return tasks?.filter(
        (item) =>
          (dayjs(item.createdAt).isAfter(FILTERS.nextWeek) ||
            !item.createdAt) &&
          !item.isCompleted
      )

    case TableEnum.COMPLETED:
      return tasks?.filter((item) => item.isCompleted)

    default:
      return []
  }
}
