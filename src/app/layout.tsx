import type { Metadata } from 'next'
import { Montserrat_Alternates, Jost } from 'next/font/google'

import clsx from 'clsx'
import { Toaster } from 'sonner'

import { Providers } from './providers'

import { SITE_NAME, SITE_DESCRIPTION } from '@/constants/seo.constants'

import '@/styles/style.scss'

const montserrat = Montserrat_Alternates({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat-alternates',
  style: ['normal', 'italic']
})

const jost = Jost({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jost',
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={clsx(montserrat.variable, jost.variable)}>
        <Providers>
          {children}
          <Toaster
            theme='dark'
            position='bottom-center'
            duration={1500}
          />
        </Providers>
      </body>
    </html>
  )
}
