
import Hero from './Hero'
import ShopByCategory from './ShopByCategory'
import OurSkinCare from './OurSkinCare'
import HappyUsers from './HappyUsers'
import JoinOurCommunity from '../../components/JoinOurCommunity/JoinOurCommunity'
import SharedFeaturedProducts from '../../components/SharedFeaturedProducts/SharedFeaturedProducts'
import useProducts from '../../hooks/useProducts'




const Home = () => {
  const { products } = useProducts()

  return (
    <div>
      <Hero />
      <SharedFeaturedProducts
        title={"Bestsellers"}
        id={"Bestsellers"}
        showProducts={products.slice(0, 4)}
      />
      <ShopByCategory />
      <SharedFeaturedProducts
        title={"New Arrive"}
        id={"NewArrive"}
        showProducts={products.slice(4, 9)}
      />
      <OurSkinCare />
      <HappyUsers />
      <JoinOurCommunity />
    </div>
  )
}

export default Home