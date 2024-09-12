'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoZzardin from '@/images/logos/zzardin.jpg'
import logoEventApp from '@/images/logos/event-app.png'
import logoArrozPaisaRexton from '@/images/logos/paisita.webp'
import logoFreelancer from '@/images/logos/freelancer.png'
import logoPai from '@/images/logos/pai.jpeg'
import logoCVPlast from '@/images/logos/CV_Logo.png'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      name: t('projects.cvPlast.name'),
      description: t('projects.cvPlast.description'),
      link: {
        href: t('projects.cvPlast.link.href'),
        label: t('projects.cvPlast.link.label'),
      },
      logo: logoCVPlast,
    },
    {
      name: t('projects.zzardin.name'),
      description: t('projects.zzardin.description'),
      link: {
        href: t('projects.zzardin.link.href'),
        label: t('projects.zzardin.link.label'),
      },
      logo: logoZzardin,
    },
    {
      name: t('projects.arrozPaisaRexton.name'),
      description: t('projects.arrozPaisaRexton.description'),
      link: {
        href: t('projects.arrozPaisaRexton.link.href'),
        label: t('projects.arrozPaisaRexton.link.label'),
      },
      logo: logoArrozPaisaRexton,
    },
    {
      name: t('projects.eventApp.name'),
      description: t('projects.eventApp.description'),
      link: {
        href: t('projects.eventApp.link.href'),
        label: t('projects.eventApp.link.label'),
      },
      logo: logoEventApp,
    },
    {
      name: t('projects.pai.name'),
      description: t('projects.pai.description'),
      link: {
        href: t('projects.pai.link.href'),
        label: t('projects.pai.link.label'),
      },
      logo: logoPai,
    },
    {
      name: t('projects.ipAddressTracker.name'),
      description: t('projects.ipAddressTracker.description'),
      link: {
        href: t('projects.ipAddressTracker.link.href'),
        label: t('projects.ipAddressTracker.link.label'),
      },
      logo: logoFreelancer,
    },
  ]

  return (
    <SimpleLayout
      title={t('projects.title')}
      intro={t('projects.intro')}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-9 w-9 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
