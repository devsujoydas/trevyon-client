
import JoinOurCommunity from "../../../components/JoinOurCommunity/JoinOurCommunity"
import SharedFeaturedProducts from "../../../components/SharedFeaturedProducts/SharedFeaturedProducts"
import ProductDetailsTop from "./ProductDetailsTop"
import RatingsandReviews from "./RatingsandReviews"

const ProductDetails = () => {
  return (
    <div className=''>
      <ProductDetailsTop />
      <SharedFeaturedProducts title={"Hand picked for you"} id={"HandPicked"} />
      <RatingsandReviews />
      <SharedFeaturedProducts title={"Best Sellers"} id={"Bestsellers"} />
      <JoinOurCommunity />
    </div>
  )
}

export default ProductDetails