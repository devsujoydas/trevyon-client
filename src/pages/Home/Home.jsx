import React from 'react'
import Hero from './Hero'
import BestSellers from './BestSellers'
import ShopByCategory from './ShopByCategory'
import NewArrive from './NewArrive'
import OurSkinCare from './OurSkinCare'
import HappyUsers from './HappyUsers'

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSellers />
      <ShopByCategory />
      <NewArrive />
      <OurSkinCare />
      <HappyUsers />
    </div>
  )
}

export default Home