'use client'

import { Logo } from '@/components/Logo'
import { MenuTab } from '@/components/MenuTab'
import { UserProfile } from '@/components/UserProfile'
import { LogoutButton } from '@/components/LogoutButton'

import { MENU } from './menu.data'

import classes from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={classes.container}>
      <nav className={classes.nav}>
        <Logo />
        <div className={classes.menu}>
          {MENU.map((item) => (
            <MenuTab
              key={item.href}
              tab={item}
            />
          ))}
        </div>
      </nav>
      <footer className={classes.footer}>
        <UserProfile />
        <LogoutButton />
      </footer>
    </aside>
  )
}
