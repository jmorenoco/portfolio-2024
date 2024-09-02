import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Javier Moreno',
    default: 'Javier Moreno - Frontend developer',
  },
  description:
    'I´m Javier, a frontend developer whose goal is to transform ideas into dynamic and effective web applications. I enjoy the process of turning complex concepts into simple and elegant solutions. In addition to my passion for programming, I run and cycle, activities that teach me to stay energetic and resilient in the face of any challenge.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
