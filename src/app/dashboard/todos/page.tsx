import type { Metadata } from 'next'

import { NO_INDEX } from '@/constants/seo.constants'

import { Heading } from '@/components/ui/Heading'
import { TodoBoard } from '@/components/TodoBoard'

export const metadata: Metadata = {
  title: 'Todos',
  ...NO_INDEX
}

export default function Todos() {
  return (
    <>
      <Heading title='Todos' />
      <TodoBoard />
    </>
  )
}
