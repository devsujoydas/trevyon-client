
import Hero from './Hero'
import ShopByCategory from './ShopByCategory'
import OurSkinCare from './OurSkinCare'
import HappyUsers from './HappyUsers'
import JoinOurCommunity from '../../components/JoinOurCommunity/JoinOurCommunity'
import SharedFeaturedProducts from '../../components/SharedFeaturedProducts/SharedFeaturedProducts'
import { useAuth } from '../../AuthProvider/AuthProvider'
 



const Home = () => {
  const {user} = useAuth() 
    
  return (
    <div>
      
      <Hero /> 
      <SharedFeaturedProducts title={"Bestsellers"} id={"Bestsellers"} />
      <ShopByCategory />
      <SharedFeaturedProducts title={"New Arrive"} id={"NewArrive"} />
      <OurSkinCare />
      <HappyUsers />
      <JoinOurCommunity />
    </div>
  )
}

export default Home