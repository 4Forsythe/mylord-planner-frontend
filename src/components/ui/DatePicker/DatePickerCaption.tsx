'use client'

import dayjs from 'dayjs'
import type { DateFormatter } from 'react-day-picker'

import classes from './DatePicker.module.scss'

const SEASONS: Record<string, string> = {
  winter: '❄️',
  spring: '🌸',
  summer: '☀️',
  autumn: '🍂'
}

const getSeason = (month: Date): keyof typeof SEASONS => {
  const monthNumber = month.getMonth() + 1

  if (monthNumber > 2 && monthNumber < 6) return 'spring'
  if (monthNumber > 5 && monthNumber < 9) return 'summer'
  if (monthNumber > 8 && monthNumber < 12) return 'autumn'
  return 'winter'
}

export const DatePickerCaption: DateFormatter = (month) => {
  const season = getSeason(month)

  return (
    <>
      <span className={classes.caption}>{SEASONS[season]}</span>
      {dayjs(month).format('MMMM')}
    </>
  )
}
