import { ITimeBlock } from '@/types/time-block.types'

export const sumLeftTime = (items: ITimeBlock[] | undefined) => {
  const mins = items?.reduce((sum, item) => item.duration + sum, 0) || 0
  const hours = Math.floor(mins / 60)

  const leftTime = 24 - hours

  return leftTime
}
