
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Product from '../../pages/Products/Product'
import useProducts from '../../hooks/useProducts'

const SharedFeaturedProducts = ({ title, id, showProducts }) => {

  return (
    <div id={`${id}`} className='w-main py-5 md:py-14'>
      <div className=' text-lg md:text-2xl flex items-center justify-between pb-5 md:pb-10'>
        <h1 className=''>{title}</h1>
        <Link to={"/products"} className='flex items-center gap-2 hover:underline'>View all products <ArrowRight /></Link>
      </div>

      <div className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-5 2xl:gap-14 '>
        {showProducts.map((product, idx) => <Product key={idx} product={product} />)}
      </div>

    </div>
  )
}

export default SharedFeaturedProducts