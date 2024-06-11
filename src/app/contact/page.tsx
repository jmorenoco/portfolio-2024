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
      setResponseMessage('¡Muchas Gracias por tus comentarios!')
      formRef.current!.reset()
      window.location.hash = '#gracias'
    } catch (err: any) {
      console.error(err)
      const message =
        err.statusText || 'Ocurrió un error al enviar. Intenta nuevamente.'
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
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
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
          } text-center`}
        >
          <Loader />
        </div>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Enviar mensaje
          </Button>
          {/* <input className="primary" type="submit" value="Enviar Mensaje" /> */}
        </div>
      </form>
      {responseMessage && (
        <article id="gracias" className="modal">
          <div className="modal-content">
            <article className="contact-form-response">
              <h3 className="text-first-color">{responseMessage}</h3>
              <span className="icons">😉</span>
            </article>
          </div>
        </article>
      )}
    </SimpleLayout>
  )
}
