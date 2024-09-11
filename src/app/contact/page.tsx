'use client'

import { useState, useRef, FormEvent } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import { Loader } from '@/components/UtilIcons'
import { useTranslation } from 'react-i18next'


export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useTranslation()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage('')

    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/javandresmoreno@gmail.com',
        {
          method: 'POST',
          body: new FormData(formRef.current!),
        },
      )

      if (!res.ok) throw res

      const json = await res.json()
      console.log(json)
      setResponseMessage(t('contact.response'))
      formRef.current!.reset()
      window.location.hash = '#gracias'
    } catch (err: any) {
      console.error(err)
      const message =
        err.statusText || t('contact.error')
      setResponseMessage(`Error ${err.status} : ${message}`)
    } finally {
      setLoading(false)
      setTimeout(() => {
        window.location.hash = '#close'
        setResponseMessage('')
      }, 3000)
    }
  }

  return (
    <SimpleLayout
      title={t('contact.title')}
      intro={t('contact.intro')}
    >
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="rounded-lg border border-zinc-300 dark:border-zinc-800"
          placeholder={t('contact.name')}
          title={t('contact.nameTitle')}
          required
          autoComplete="John Doe"
        />
        <input
          type="email"
          name="email"
          className="rounded-lg border border-zinc-300 dark:border-zinc-800"
          placeholder={t('contact.email')}
          title={t('contact.emailTitle')}
          required
          autoComplete="mail@example.com"
        />
        <textarea
          name="comments"
          className="rounded-lg border border-zinc-300 dark:border-zinc-800"
          cols={50}
          rows={10}
          placeholder={t('contact.comments')}
          required
        ></textarea>
        <div
          className={`contact-form-loader ${
            loading ? '' : 'hidden'
          } grid place-content-center`}
        >
          <Loader />
        </div>
        <div className="text-center">
          <Button variant="primary" type="submit">
            {t('contact.send')}
          </Button>
        </div>
      </form>
      {responseMessage && (
        <article
          id="gracias"
          className="mx-auto grid max-w-md place-content-center rounded-lg bg-zinc-200 p-4 dark:bg-zinc-800"
        >
          <h3 className="text-center font-bold text-zinc-800 dark:text-zinc-400">
            {responseMessage} 😉 
          </h3>
        </article>
      )}
    </SimpleLayout>
  )
}
