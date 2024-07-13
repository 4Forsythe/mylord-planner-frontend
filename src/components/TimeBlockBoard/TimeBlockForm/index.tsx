'use client'

import { useFormContext, SubmitHandler, Controller } from 'react-hook-form'

import type { TimeBlockFormType } from '@/types/time-block.types'

import { COLORS } from './colors.data'

import { Field } from '@/components/ui/Field'
import { ColorPicker } from '@/components/ui/ColorPicker'
import { Button } from '@/components/ui/Button'

import { useCreateTimeBlock } from '@/hooks/useCreateTimeBlock'
import { useUpdateTimeBlock } from '@/hooks/useUpdateTimeBlock'

import classes from './TimeBlockForm.module.scss'

export const TimeBlockForm = () => {
  const { register, watch, reset, handleSubmit, control } =
    useFormContext<TimeBlockFormType>()

  const id = watch('id')

  const { mutate: mutateUpdateTimeBlock } = useUpdateTimeBlock(id)
  const { mutate: mutateCreateTimeBlock, isPending } = useCreateTimeBlock()

  const onSubmit: SubmitHandler<TimeBlockFormType> = (data) => {
    const { id, color, ...rest } = data
    const dto = { ...rest, color: color || undefined }

    if (id) {
      mutateUpdateTimeBlock({
        id,
        data: dto
      })
    } else {
      mutateCreateTimeBlock(dto)
    }

    reset({
      id: undefined,
      color: COLORS[0],
      name: '',
      duration: undefined,
      order: 1
    })
  }

  return (
    <div className={classes.container}>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          id='name'
          label='Todo'
          placeholder='Enter todo...'
          {...register('name')}
        />
        <Field
          id='duration'
          label='Duration'
          type='number'
          placeholder='Enter duration (in min.)'
          {...register('duration', {
            valueAsNumber: true
          })}
        />
        <div className={classes.option}>
          <span className={classes.label}>Choice color</span>
          <Controller
            name='color'
            control={control}
            render={({ field: { value, onChange } }) => (
              <ColorPicker
                items={COLORS.map((item) => ({
                  label: item,
                  value: item
                }))}
                onChange={onChange}
                value={value || COLORS[0]}
              />
            )}
          />
        </div>
        <Button
          type='submit'
          variant='outlined'
          disabled={isPending}
        >
          {id ? 'Save changes' : 'Create time-block'}
        </Button>
      </form>
    </div>
  )
}
