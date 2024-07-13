import type { Metadata } from 'next'

import { NO_INDEX } from '@/constants/seo.constants'

import { Heading } from '@/components/ui/Heading'
import { SettingForm } from '@/components/SettingForm'

export const metadata: Metadata = {
  title: 'Settings',
  ...NO_INDEX
}

export default function Settings() {
  return (
    <>
      <Heading title='Settings' />
      <SettingForm />
    </>
  )
}
