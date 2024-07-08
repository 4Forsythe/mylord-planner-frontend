import type { PropsWithChildren } from 'react'

import { DashboardLayout } from '@/layouts/DashboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <DashboardLayout>{children}</DashboardLayout>
}
