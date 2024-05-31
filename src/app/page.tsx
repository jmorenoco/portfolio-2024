import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Role } from '@/app/Role/page'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import { MailIcon, BriefcaseIcon, ArrowDownIcon } from '@/components/UtilIcons'

import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPai from '@/images/logos/pai.jpeg'
import logoStarbucks from '@/images/logos/starbucks.svg'
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
  let resume: Array<Role> = [
    {
      company: 'Pai Suscripciones',
      title: 'Frontend developer',
      logo: logoPai,
      start: '05/2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
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
              Hi, I'm Javier Moreno
            </h1>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-600 sm:text-3xl dark:text-zinc-300">
              Frontend developer, amateur cyclist and enthusiastic marathon
              runner
            </h3>
            <div className="mt-6 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
              <p className="text-balance">
                +3 years of experience building and maintaining responsive web
                applications, from Bogotá, Colombia.
              </p>
              <p className="text-balance">
                I am a self-taught developer passionate about learning new
                technologies and creating attractive and functional products.
              </p>
            </div>

            <div className="mt-4 flex justify-evenly gap-4 lg:mt-8">
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
            <Button
              href="mailto:hola@javandresmoreno.com"
              variant="primary"
              className="group mt-8 w-full"
            >
              <MailIcon className="h-7" />
              Contact me!
            </Button>
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
