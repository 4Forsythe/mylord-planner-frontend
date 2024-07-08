'use client'

import type { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/Sidebar'
import { Navbar } from '@/components/Navbar'

import classes from './Dashboard.module.scss'

export function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={classes.container}>
      <Sidebar />
      <main className={classes.main}>{children}</main>
      <Navbar />
    </div>
  )
}
