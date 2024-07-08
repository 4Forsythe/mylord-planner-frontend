import {
  LayoutDashboard,
  KanbanSquare,
  Timer,
  CalendarRange,
  Settings
} from 'lucide-react'

import { IMenuTab } from '@/components/MenuTab'

import { DASHBOARD_ROUTE } from '@/config/routes.config'

export const MENU: IMenuTab[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: DASHBOARD_ROUTE.HOME
  },
  {
    title: 'Todos',
    icon: KanbanSquare,
    href: DASHBOARD_ROUTE.TODOS
  },
  {
    title: 'Timer',
    icon: Timer,
    href: DASHBOARD_ROUTE.TIMER
  },
  {
    title: 'Time-blocking',
    icon: CalendarRange,
    href: DASHBOARD_ROUTE.TIME_BLOCKING
  },
  {
    title: 'Settings',
    icon: Settings,
    href: DASHBOARD_ROUTE.SETTINGS
  }
]
