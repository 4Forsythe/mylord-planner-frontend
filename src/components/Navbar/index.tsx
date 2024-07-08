import { MenuTab } from '@/components/MenuTab'

import { MENU } from '@/components/Sidebar/menu.data'

import classes from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <footer className={classes.container}>
      <nav className={classes.nav}>
        <div className={classes.menu}>
          {MENU.map((item) => (
            <MenuTab
              key={item.href}
              tab={item}
            />
          ))}
        </div>
      </nav>
    </footer>
  )
}
