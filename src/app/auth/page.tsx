import type { Metadata } from 'next'

import { NO_INDEX } from '@/constants/seo.constants'

import { AuthForm } from '@/components/AuthForm'

export const metadata: Metadata = {
  title: 'Authentication',
  ...NO_INDEX
}

export default function Auth() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <AuthForm />
    </div>
  )
}
