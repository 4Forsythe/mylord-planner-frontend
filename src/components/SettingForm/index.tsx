'use client'

import React from 'react'

import clsx from 'clsx'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

import { Skeleton } from './Skeleton'
import { Field } from '@/components/ui/Field'
import { Button } from '@/components/ui/Button'

import type { UserFormType } from '@/types/user.types'
import type { SettingFormType } from '@/types/setting.types'

import { useInitial } from '@/hooks/useInitial'
import { useUpdateProfile } from '@/hooks/useUpdateProfile'
import { useUpdateSettings } from '@/hooks/useUpdateSettings'
import { useResetSettings } from '@/hooks/useResetSettings'

import classes from './SettingForm.module.scss'

export const SettingForm = () => {
  const { register, handleSubmit, reset } = useForm<
    UserFormType & SettingFormType
  >({ mode: 'onSubmit' })

  const { isLoading } = useInitial(reset)

  const {
    mutate: mutateUpdateProfile,
    isPending: isPendingUpdateProfile,
    isSuccess: isSuccessUpdateProfile
  } = useUpdateProfile()

  const {
    mutate: mutateUpdateSettings,
    isPending: isPendingUpdateSettings,
    isSuccess: isSuccessUpdateSettings
  } = useUpdateSettings()

  const { mutate: mutateResetSettings, isPending: isPendingResetSettings } =
    useResetSettings()

  const isPending =
    isPendingUpdateProfile || isPendingUpdateSettings || isPendingResetSettings

  const onSubmit: SubmitHandler<UserFormType & SettingFormType> = (data) => {
    const { password, email, name, taskInterval, breakInterval, intervals } =
      data

    mutateUpdateProfile({
      email,
      name,
      password: password || undefined
    })

    mutateUpdateSettings({
      taskInterval,
      breakInterval,
      intervals
    })

    toast.success('Successful settings update')
  }

  const onReset = () => {
    mutateResetSettings()
    reset()
  }

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <div className={classes.container}>
      <form
        className={clsx(classes.form, 'opacity-animation', 'slide-animation')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.fields}>
          <div className={classes.block}>
            <Field
              id='email'
              label='Email'
              placeholder='Enter email address'
              {...register('email')}
            />
            <Field
              id='username'
              label='Username'
              placeholder='Enter username (optional)'
              {...register('name')}
            />
            <Field
              id='password'
              label='Password'
              type='password'
              placeholder='Enter new password'
              {...register('password')}
            />
          </div>
          <div className={classes.block}>
            <Field
              id='taskInterval'
              label='Task interval duration'
              type='number'
              placeholder='Enter task interval (in min.)'
              {...register('taskInterval', { valueAsNumber: true })}
            />
            <Field
              id='breakInterval'
              label='Break interval duration'
              placeholder='Enter break interval (in min.)'
              {...register('breakInterval', { valueAsNumber: true })}
            />
            <Field
              id='intervals'
              label='Max intervals (1-7)'
              placeholder='Enter max intervals (1-7)'
              {...register('intervals', { valueAsNumber: true })}
            />
          </div>
        </div>
        <div className={classes.controls}>
          <Button
            type='submit'
            disabled={isPending}
            isLoading={isPendingUpdateProfile || isPendingUpdateSettings}
          >
            Save changes
          </Button>
          <Button
            variant='outlined'
            type='button'
            disabled={isPending}
            isLoading={isPendingResetSettings}
            onClick={onReset}
          >
            Reset to defaults
          </Button>
        </div>
      </form>
    </div>
  )
}
