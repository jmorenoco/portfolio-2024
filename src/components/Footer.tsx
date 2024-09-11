'use client'
import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { useTranslation } from 'react-i18next'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-sky-500 dark:hover:text-sky-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-24 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-8 pt-8 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">{t('navigation.about')}</NavLink>
                <NavLink href="/projects">{t('navigation.projects')}</NavLink>
                <NavLink href="/contact">{t('navigation.contact')}</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} {t('footer.copyright')}
                <Link
                  href={'https://x.com/javandresmoreno'}
                  target="_blank"
                  className="px-2"
                >
                  Javier Moreno
                </Link>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
