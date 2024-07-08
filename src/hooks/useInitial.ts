'use client'

import React from 'react'

import { UseFormReset } from 'react-hook-form'

import { useProfile } from './useProfile'

import type { UserFormType } from '@/types/user.types'
import type { SettingFormType } from '@/types/setting.types'
import { useSettings } from './useSettings'

export function useInitial(
  reset: UseFormReset<UserFormType & SettingFormType>
) {
  const {
    data: profile,
    isLoading: isLoadingProfile,
    isSuccess: isSuccessProfile
  } = useProfile()
  const {
    data: settings,
    isLoading: isLoadingSettings,
    isSuccess: isSuccessSettings
  } = useSettings()

  const isLoading = isLoadingProfile || isLoadingSettings
  const isSuccess = isSuccessProfile && isSuccessSettings

  React.useEffect(() => {
    if (profile && settings) {
      reset({
        email: profile.user.email,
        name: profile.user.name,
        taskInterval: settings.taskInterval,
        breakInterval: settings.breakInterval,
        intervals: settings.intervals
      })
    }
  }, [isSuccess])

  return { isLoading }
}
