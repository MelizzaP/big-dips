import React from 'react'

import picture from '../../assets/melissa-laura.JPG'

export default function About() {
  return (
    <div className="my-32 mx-16 flex flex-col items-center gap-y-6">
      <h1 className="text-3xl underline">Our Story</h1>
      <p className="text-xl text-center">
        Hi! Welcome! BigDips is the brainchild of Laura & Melissa, partners in life, and co-founders
        of BigDips.
      </p>
      <img src={picture} alt="Melissa and Laura" className="max-h-64 rounded-md drop-shadow" />
      <p className="text-xl text-center">
        Melissa always dreamed of having a Vitamix. Laura thought they were too expensive and
        overrated. But then, during the 2020 COVID lockdown, Laura decided to finally give in and
        surprise Melissa with the queen of all kitchen accessories. From that point, their life
        changed. Melissa was a wizard, making dip after dip that were delicious, healthy, vegan, and
        highly sought after in the building. After a while, they realized, "we might just have
        something!" Thus, BigDips was born.
      </p>
      <p className="text-xl text-center">Hope you enjoy the dips as much as our neighbors.</p>
    </div>
  )
}
