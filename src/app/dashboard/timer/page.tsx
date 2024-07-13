import type { Metadata } from 'next'

import { NO_INDEX } from '@/constants/seo.constants'

import { Heading } from '@/components/ui/Heading'
import { Session } from '@/components/Session'

export const metadata: Metadata = {
  title: 'Timer',
  ...NO_INDEX
}

export default function Timer() {
  return (
    <>
      <Heading title='Timer' />
      <Session />
    </>
  )
}
