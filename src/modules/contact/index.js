import React from 'react'

export default function Contact() {
  return (
    <div className="m-32 flex flex-col gap-y-6">
      <h1 className="text-3xl">Contact Us</h1>
      <h2 className="text-xl">Want to place an order or learn more about Big Dips?</h2>
      <a href="mailto:contact@bigdips.co">
        Email us at <span className="underline">contact@bigdips.co</span>!
      </a>
    </div>
  )
}
