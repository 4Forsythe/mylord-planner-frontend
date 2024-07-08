import Link from 'next/link'

import { Sparkles } from 'lucide-react'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/Button'

import { DASHBOARD_ROUTE } from '@/config/routes.config'

import classes from './Hero.module.scss'

export const Hero = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.slogan}>
          <Logo />
          <h1 className={classes.title}>Make Your Day Lordly</h1>
        </div>
        <div className={classes.controls}>
          <Link href={DASHBOARD_ROUTE.HOME}>
            <Button>
              <Sparkles size={18} />
              Get Started
            </Button>
          </Link>
          <Link
            href={String(process.env.NEXT_PUBLIC_GITHUB_SOURCE)}
            target='_blank'
          >
            <Button variant='outlined'>GitHub</Button>
          </Link>
        </div>
      </header>
    </div>
  )
}
