import dayjs, { type Dayjs } from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

export const FILTERS: Record<string, Dayjs> = {
  today: dayjs().startOf('day'),
  tomorrow: dayjs().add(1, 'day').startOf('day'),
  thisWeek: dayjs().endOf('isoWeek'),
  nextWeek: dayjs().add(1, 'week').startOf('day'),
  later: dayjs().add(2, 'week').startOf('day')
}

export enum TableEnum {
  TODAY = 'today',
  TOMORROW = 'tomorrow',
  THIS_WEEK = 'thisWeek',
  NEXT_WEEK = 'nextWeek',
  LATER = 'later',
  COMPLETED = 'completed'
}

export const TABLE = [
  {
    label: "Today's",
    property: TableEnum.TODAY
  },
  {
    label: 'Tomorrow',
    property: TableEnum.TOMORROW
  },
  {
    label: 'This week',
    property: TableEnum.THIS_WEEK
  },
  {
    label: 'Next week',
    property: TableEnum.NEXT_WEEK
  },
  {
    label: 'Some later',
    property: TableEnum.LATER
  },
  {
    label: 'Completed',
    property: TableEnum.COMPLETED
  }
]
