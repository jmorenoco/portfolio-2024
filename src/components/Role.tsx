'use client'
import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { MinusSmallIcon, PlusSmallIcon } from '@/components/UtilIcons'

export interface Role {
  company: string
  location: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  achievements?: string[]
}

export function Role({ role }: { role: Role }) {
  const [isOpen, setIsOpen] = useState(false)
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <div>
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={role.logo}
            alt=""
            className="h-7 w-7 rounded-full"
            unoptimized
          />
        </div>
        <div className="w-full">
          <dl className="flex flex-auto flex-wrap justify-between gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {role.company}
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="text-sm  text-zinc-900 dark:text-zinc-100">
              {role.location}
            </dd>
          </dl>
          <dl className="flex flex-auto flex-wrap justify-between gap-x-2">
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              {role.title}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="text-xs text-zinc-400 sm:ml-auto dark:text-zinc-500"
              aria-label={`${startLabel} until ${endLabel}`}
            >
              <time dateTime={startDate}>{startLabel}</time>{' '}
              <span aria-hidden="true">—</span>{' '}
              <time dateTime={endDate}>{endLabel}</time>
            </dd>
          </dl>
        </div>
        <div className="grid justify-items-end">
          <button
            className="flex items-center gap-2 text-sm font-medium text-sky-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <PlusSmallIcon className="h-6 w-6" />
            ) : (
              <MinusSmallIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </li>
      {isOpen && role.achievements && (
        <ul className="mb-6 ml-14 mt-2 list-disc rounded-lg bg-zinc-100 py-3 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {role.achievements.map((achievement, index) => (
            <li className="ml-10" key={index}>
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
