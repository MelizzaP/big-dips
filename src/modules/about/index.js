import React from 'react'

import picture from '../../assets/melissa-laura.JPG'

export default function About() {
  return (
    <div className="my-32 mx-16 flex flex-col items-center gap-y-6">
      <h1 className="text-3xl underline">Our Story</h1>
      <p className="text-xl text-center">
        Hi! Welcome to BigDips! We are Laura & Melissa, partners in life and also co-founders of
        BigDips. Here's a little bit about our story:
      </p>
      <img src={picture} alt="Melissa and Laura" className="max-h-64 rounded-md drop-shadow" />
      <p className="text-xl text-center">
        This company came to be because of Melissa always wanting a Vitamix. Laura thought they were
        too expensive and dragged her feet on the purchase but during the covid lockdown of 2020,
        Laura decided to finally surprise Melissa with the Queen of kitchen accessories. From that
        point our life changed. Melissa was a wizard, making dip after dip that were healthy, vegan,
        and highly sought after in our building. After a while, we realized, we might just have
        something! Thus, BigDips was born.
      </p>
    </div>
  )
}
