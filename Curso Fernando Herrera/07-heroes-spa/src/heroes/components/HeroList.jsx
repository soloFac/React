import React from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroItem } from './HeroItem'

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    heroes.map(hero =>
      <HeroItem
        key={hero.id}
        hero={hero}
      />
    )
  )
}
