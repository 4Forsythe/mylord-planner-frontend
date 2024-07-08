import type { Metadata } from 'next'

import { Hero } from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return <Hero />
}
