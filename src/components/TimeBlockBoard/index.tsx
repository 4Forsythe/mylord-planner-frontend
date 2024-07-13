'use client'

import { useForm, FormProvider } from 'react-hook-form'

import { TimeBlockList } from './TimeBlockList'
import { TimeBlockForm } from './TimeBlockForm'

import type { TimeBlockFormType } from '@/types/time-block.types'

import classes from './TimeBlockBoard.module.scss'

export const TimeBlockBoard = () => {
  const methods = useForm<TimeBlockFormType>()

  return (
    <FormProvider {...methods}>
      <div className={classes.container}>
        <TimeBlockList />
        <TimeBlockForm />
      </div>
    </FormProvider>
  )
}
