import cleansersImg from '../../assets/category/cleansers.png'
import serumsImg from '../../assets/category/serums.png'
import moisturizersImg from '../../assets/category/moisturizers.png'
import maskImg from '../../assets/category/mask.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const categoryBox = (img, text) => {
  return (
    <Link to={"/products"} className='relative cursor-pointer overflow-hidden group rounded-sm'>
      <img src={img} className='w-full h-full group-hover:scale-105 transition-all duration-500' alt="" />
      <div className='absolute inset-0 flex justify-center items-center'>
        <h1 className='text-4xl text-white'>{text}</h1>
      </div>
    </Link>
  )
}

const ShopByCategory = () => {
  return (
    <div className='bg-[#EBCAD04D]'>
      <div className='w-main py-14'>
        <div className=' text-lg md:text-2xl pb-5 md:pb-10'>
          <h1 className=''>Shop by Category</h1>
        </div>


        <div className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-5 2xl:gap-14 '>
          {categoryBox(cleansersImg, "Cleansers")}
          {categoryBox(serumsImg, "Serums")}
          {categoryBox(moisturizersImg, "Moisturizer")}
          {categoryBox(maskImg, "Mask")}
        </div>
      </div>
    </div>
  )
}

export default ShopByCategory