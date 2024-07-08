'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

import { Heading } from '@/components/ui/Heading'
import { Field } from '@/components/ui/Field'
import { Button } from '@/components/ui/Button'

import { DASHBOARD_ROUTE } from '@/config/routes.config'

import type { AuthFormType } from '@/types/auth.types'

import { authService } from '@/services/auth.service'

import classes from './AuthForm.module.scss'

export const AuthForm = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = React.useState(true)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AuthFormType>({
    mode: 'onChange'
  })

  const { mutate, isPending, isError } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: AuthFormType) =>
      isLogin ? authService.login(data) : authService.register(data),
    onSuccess() {
      toast.success('Successful authentication')
      router.push(DASHBOARD_ROUTE.HOME)
    }
  })

  const onSwitch = () => {
    setIsLogin(!isLogin)
  }

  const onSubmit: SubmitHandler<AuthFormType> = (data) => {
    mutate(data)
  }

  return (
    <div className={classes.container}>
      <Heading title={isLogin ? 'Login' : 'Register'} />
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {isError && (
          <span className={classes.error}>Invalid email or password</span>
        )}
        <div className={classes.fields}>
          {!isLogin && (
            <Field
              id='username'
              label='Username'
              disabled={isPending}
              placeholder='Enter username (optional)'
              {...register('name', { required: false })}
            />
          )}
          <Field
            id='email'
            label='Email'
            type='text'
            disabled={isPending}
            error={errors.email?.message}
            placeholder='Enter email address'
            {...register('email', {
              required: 'Email can not be blank',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email format'
              }
            })}
          />
          <Field
            id='password'
            label='Password'
            type='password'
            disabled={isPending}
            error={errors.password?.message}
            placeholder='Enter password'
            {...register('password', {
              required: 'Password can not be blank',
              minLength: { value: 6, message: 'Invalid length (min 6 chars)' }
            })}
          />
        </div>
        <div className={classes.controls}>
          <Button
            type='submit'
            isLoading={isPending}
          >
            {isLogin ? 'Login' : 'Join now'}
          </Button>
          <Button
            variant='outlined'
            type='button'
            isLoading={isPending}
            onClick={onSwitch}
          >
            {isLogin ? 'Create an account' : 'Login'}
          </Button>
        </div>
      </form>
    </div>
  )
}
