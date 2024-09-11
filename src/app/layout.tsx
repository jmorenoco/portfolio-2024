import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Javier Moreno',
    default: 'Javier Moreno - Desarrollador Frontend',
  },
  description:
    'Soy Javier, un desarrollador frontend cuyo objetivo es transformar ideas en aplicaciones web dinámicas y efectivas. Disfruto el proceso de convertir conceptos complejos en soluciones simples y elegantes. Además de mi pasión por la programación, corro y ando en bicicleta, actividades que me enseñan a mantenerme enérgico y resiliente frente a cualquier desafío.',
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
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
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
