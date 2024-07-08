'use client'

import { useRouter } from 'next/navigation'

import { LogOut } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'

import { authService } from '@/services/auth.service'

import classes from './LogoutButton.module.scss'

export const LogoutButton = () => {
  const router = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => router.push('/')
  })

  return (
    <button
      className={classes.element}
      onClick={() => mutate()}
    >
      <LogOut className={classes.icon} />
    </button>
  )
}
