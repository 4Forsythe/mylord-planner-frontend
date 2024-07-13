import type { Metadata } from 'next'

import { NO_INDEX } from '@/constants/seo.constants'

import { Heading } from '@/components/ui/Heading'
import { TimeBlockBoard } from '@/components/TimeBlockBoard'

export const metadata: Metadata = {
  title: 'Time-blocking',
  ...NO_INDEX
}

export default function TimeBlocking() {
  return (
    <>
      <Heading title='Time-blocking' />
      <TimeBlockBoard />
    </>
  )
}
