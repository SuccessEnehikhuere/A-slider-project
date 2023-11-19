import React, { useState } from 'react'
import { shortList } from './data'

export const Carousel = () => {
  const [people, setPeople] = useState(shortList)
  return (
    <section className='slider-container'>
      {people.map((person)=>{
        const {id, image, quote, title, name} = person
        return <article className='slide'></article>
      })}
    </section>
  )
}
