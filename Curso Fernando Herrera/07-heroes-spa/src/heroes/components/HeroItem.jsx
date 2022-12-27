import React from 'react'

export const HeroItem = ({ hero }) => {
  return (
    <ul>
      <li>{hero.superhero}</li>
      <li>{hero.alter_ego}</li>
      <li>{hero.first_appearance}</li>
      <li>{hero.characters}</li>
    </ul>
  )
}
