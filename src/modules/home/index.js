import React from 'react'

import logo from '../../assets/logo.svg'

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center my-30 h-screen">
        <img src={logo} className="w-1/2" alt="big dipper logo" />
        <h1 className="font-sans text-white text-4xl my-10"> Big Dips Co </h1>
      </header>
    </>
  )
}
