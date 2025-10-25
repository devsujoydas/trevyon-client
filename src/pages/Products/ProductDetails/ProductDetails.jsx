
import { useLoaderData } from "react-router-dom"
import JoinOurCommunity from "../../../components/JoinOurCommunity/JoinOurCommunity"
import SharedFeaturedProducts from "../../../components/SharedFeaturedProducts/SharedFeaturedProducts"
import ProductDetailsTop from "./ProductDetailsTop"
import RatingsandReviews from "./RatingsandReviews"
import useProducts from "../../../hooks/useProducts"

const ProductDetails = () => {
  const { data } = useLoaderData()
  const { products } = useProducts()

  return (
    <div className=''>
      <ProductDetailsTop product={data} />
      <SharedFeaturedProducts
        title={"Hand picked for you"}
        id={"HandPicked"}
        showProducts={products.slice(0, 4)}
      />

      <RatingsandReviews product={data} />

      <SharedFeaturedProducts
        title={"Best Sellers"}
        id={"Bestsellers"}
        showProducts={products.slice(4, 9)}
      />

      <JoinOurCommunity />
    </div>
  )
}

export default ProductDetails