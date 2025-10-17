import React from 'react'
import Hero from './Hero'
import BestSellers from './BestSellers'
import ShopByCategory from './ShopByCategory'
import NewArrive from './NewArrive'
import OurSkinCare from './OurSkinCare'
import HappyUsers from './HappyUsers'
import JoinOurCommunity from '../../components/JoinOurCommunity/JoinOurCommunity'


const Home = () => {
  return (
    <div>
      <Hero /> 
      <BestSellers />
      <ShopByCategory />
      <NewArrive />
      <OurSkinCare />
      <HappyUsers />
      <JoinOurCommunity />
    </div>
  )
}

export default Home