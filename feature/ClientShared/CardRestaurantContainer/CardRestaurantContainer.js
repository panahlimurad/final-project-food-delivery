import React from 'react'
import CardRestaurant from '../CardRestaurant/CardRestaurant'


const CardRestaurantContainer = () => {
  return (
    <div className='flex flex-wrap justify-center gap-7'>
      <CardRestaurant/>
      <CardRestaurant/>
      <CardRestaurant/>
      <CardRestaurant/>
    </div>
  )
}

export default CardRestaurantContainer