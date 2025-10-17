import React from 'react'
import Product from './Product'
import JoinOurCommunity from '../../components/JoinOurCommunity/JoinOurCommunity'

const Products = () => {
  return (
    <div >
      <div className='bg-[#F9E4CB] py-5'>
        <div className='flex justify-between items-center w-main text-lg' >
          <div className='flex items-center gap-10 '>
            <button className='font-bold cursor-pointer'>All Products</button>
            <div className=' items-center md:flex-row flex-col hidden gap-10 '>

              <button className='cursor-pointer text-zinc-700 hover:text-black transition-all'>Face</button>
              <button className='cursor-pointer text-zinc-700 hover:text-black transition-all'>Brow</button>
              <button className='cursor-pointer text-zinc-700 hover:text-black transition-all'>Eye</button>
              <button className='cursor-pointer text-zinc-700 hover:text-black transition-all'>Lip</button>
              <button className='cursor-pointer text-zinc-700 hover:text-black transition-all'>Sets</button>
            </div>
          </div>
          <div>
            <div className='flex items-center'>
              <p>Sort :</p>
              <select name="" id="" className='outline-none cursor-pointer'>
                <option value="featured">Featured</option>
                <option value="max">Max</option>
                <option value="min">Min</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products boxs */}
      <div className=' py-10 w-main grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 2xl:gap-14 '>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <JoinOurCommunity />
    </div>
  )
}

export default Products