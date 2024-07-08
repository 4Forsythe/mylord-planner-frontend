'use client'

import React from 'react'

import dayjs from 'dayjs'
import { CalendarDays } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import type { SelectSingleEventHandler } from 'react-day-picker'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import { DatePickerCaption as formatCaption } from './DatePickerCaption'

import { useOutside } from '@/hooks/useOutside'

import 'react-day-picker/dist/style.css'
import classes from './DatePicker.module.scss'

dayjs.extend(localizedFormat)

interface IDatePicker {
  value: string
  onChange: (value: string) => void
}

export const DatePicker = ({ value, onChange }: IDatePicker) => {
  const [target, setTarget] = React.useState<Date>()
  const { ref, isVisible, setIsVisible } = useOutside(false)

  const onSelectDay: SelectSingleEventHandler = (date) => {
    const isoString = date?.toISOString()

    setTarget(date)

    if (isoString) {
      onChange(isoString)
      setIsVisible(false)
    } else {
      onChange('')
    }
  }

  return (
    <div
      className={classes.container}
      ref={ref}
    >
      <button
        className={classes.control}
        onClick={() => setIsVisible(!isVisible)}
      >
        <CalendarDays className={classes.icon} />
        {value ? dayjs(value).format('LL') : 'Click for select day'}
      </button>
      {isVisible && (
        <div className={classes.dropdown}>
          <DayPicker
            mode='single'
            fromDate={new Date()}
            selected={target}
            onSelect={onSelectDay}
            formatters={{ formatCaption }}
            weekStartsOn={1}
            defaultMonth={target}
            initialFocus={isVisible}
          />
        </div>
      )}
    </div>
  )
}
