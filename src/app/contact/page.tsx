'use client'

import { useState, useRef, FormEvent } from 'react'
import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import { Loader } from '@/components/UtilIcons'

const metadata: Metadata = {
  title: 'Contact me',
  description:
    'Contact me to discuss how we can work together and take your project to the next level.',
}

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

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
      setResponseMessage('Thank you very much, I will get back to you asap.')
      formRef.current!.reset()
      window.location.hash = '#gracias'
    } catch (err: any) {
      console.error(err)
      const message =
        err.statusText || 'An error has occurred. Please try again later.'
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
      title="Contact me!"
      intro="I'd love to discuss how we can work together and take your project to the next level."
    >
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="rounded-lg border border-zinc-300 dark:border-zinc-800"
          placeholder="Type your name *"
          title="Name accepts only letters and blanks."
          required
          autoComplete="John Doe"
        />
        <input
          type="email"
          name="email"
          className="rounded-lg border border-zinc-300 dark:border-zinc-800"
          placeholder="Type your email *"
          title="wrong email"
          required
          autoComplete="mail@example.com"
        />
        <textarea
          name="comments"
          className="rounded-lg border border-zinc-300 dark:border-zinc-800"
          cols={50}
          rows={10}
          placeholder="Leave me your comments *"
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
            Send message
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
