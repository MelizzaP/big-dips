import React from 'react'

import Input from './input'

const { useState } = React

const contactUsEmail = 'info@bigdips.co'
export default function Contact() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const formAction = `mailto:${contactUsEmail}`
  return (
    <div className="m-32 flex flex-col gap-y-6">
      <h1 className="text-3xl">Contact Us</h1>
      <h2 className="text-xl">Want to place an order or learn more about Big Dips?</h2>
      <form
        className="flex flex-col gap-3"
        autoComplete
        name="contact-us-email"
        action={formAction}
        method="POST"
      >
        <Input
          copy="Email Address"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <Input copy="Subject" id="subject" name="subject" type="text" onChange={setSubject} />
        <Input copy="Body" id="body" name="body" type="textarea" rows={5} onChange={setBody} />
      </form>
    </div>
  )
}
