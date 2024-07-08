'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'

import classes from './MenuTab.module.scss'

export interface IMenuTab {
  title: string
  icon: LucideIcon
  href: string
}

export const MenuTab = ({ tab }: { tab: IMenuTab }) => {
  const pathname = usePathname()

  return (
    <div className={classes.container}>
      <Link
        className={clsx(classes.element, {
          [classes.selected]: pathname === tab.href
        })}
        href={tab.href}
      >
        <tab.icon className={classes.icon} />
        <span className={classes.title}>{tab.title}</span>
      </Link>
    </div>
  )
}
