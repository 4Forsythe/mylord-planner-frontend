import type { Metadata } from 'next'

import { NO_INDEX } from '@/constants/seo.constants'

import { Heading } from '@/components/ui/Heading'
import { Statistics } from '@/components/Statistics'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX
}

export default function Dashboard() {
  return (
    <>
      <Heading title='Statistics' />
      <Statistics />
    </>
  )
}
