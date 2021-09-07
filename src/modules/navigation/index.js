import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Nav() {
  return (
    <BrowserRouter>
      <div className="fixed w-screen">
        <nav className="underline text-white font-sans my-5">
          <ul className="flex flex-row justify-around">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  )
}
