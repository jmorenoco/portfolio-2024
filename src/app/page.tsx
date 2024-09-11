'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { Role } from '@/components/Role'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import { MailIcon, BriefcaseIcon, ArrowDownIcon } from '@/components/UtilIcons'

import logoFreelancer from '@/images/logos/freelancer.png'
import logoPai from '@/images/logos/pai.jpeg'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  const { t } = useTranslation()
  let resume: Array<Role> = [
    {
      company: t('resume.pai.company'),
      location: t('resume.pai.location'),
      title: t('resume.pai.title'),
      logo: logoPai,
      start: t('resume.pai.start'),
      end: {
        label: t('resume.pai.end.label'),
        dateTime: new Date().getFullYear().toString(),
      },
      achievements: [
        t('resume.pai.achievements.0'),
        t('resume.pai.achievements.1'),
        t('resume.pai.achievements.2'),
        t('resume.pai.achievements.3'),
        t('resume.pai.achievements.4'),
      ],
    },
    {
      company: t('resume.freelancer.company'),
      location: t('resume.freelancer.location'),
      title: t('resume.freelancer.title'),
      logo: logoFreelancer,
      start: t('resume.freelancer.start'),
      end: t('resume.freelancer.end'),
      achievements: [
        t('resume.freelancer.achievements.0'),
        t('resume.freelancer.achievements.1'),
        t('resume.freelancer.achievements.2'),
        t('resume.freelancer.achievements.3'),
      ],
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{t('work.title')}</span>
      </h2>
      <ol className="mt-6 space-y-8">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <div className="flex justify-end">
        <Button
          href="https://javandresmoreno-cv.netlify.app/"
          variant="primary"
          className="group mt-6 w-full lg:w-fit"
          target="_blank"
        >
          {t('resume.button')}
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()  
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              {t('home.title')}
            </h1>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-600 sm:text-3xl dark:text-zinc-300">
              {t('home.subtitle')}
            </h3>
            <div className="mt-6 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
              <p className="text-balance">
                {t('home.description')}
              </p>
              <p className="text-balance">
                {t('home.description2')}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8">
              <Button
                href="mailto:hola@javandresmoreno.com"
                variant="primary"
                className="group mt-8 w-full lg:w-fit"
              >
                <MailIcon className="h-7" />
                {t('home.contactMe')}
              </Button>
              <div className="mt-8 flex w-full justify-evenly gap-4 lg:w-fit lg:justify-start">
                <SocialLink
                  href="https://x.com/javandresmoreno"
                  icon={XIcon}
                  target="_blank"
                />
                <SocialLink
                  href="https://instagram.com/javandresmoreno"
                  icon={InstagramIcon}
                  target="_blank"
                />
                <SocialLink
                  href="https://github.com/javandresmoreno"
                  icon={GitHubIcon}
                  target="_blank"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/javandresmoreno"
                  icon={LinkedInIcon}
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="md:mt-18 mt-12">
        <div className="mx-auto grid grid-cols-1 gap-y-20">
          <div className="space-y-10">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
