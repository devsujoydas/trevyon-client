import React from 'react'
import { Link } from 'react-router-dom'

import skinCareImg from '../../assets/skincare.png'

const OurSkinCare = () => {
  return (
    <div className='bg-main '>
      <div className='w-main flex items-center justify-between md:flex-row flex-col md:py-0 py-10 gap-10 md:gap-20'>
        <div className='flex-1 space-y-3 md:space-y-8'>
          <h1 className='font-semibold text-2xl md:text-4xl'>Our Skincare Philosophy</h1>
          <p className=' text-sm md:text-lg'>Seoul Mirage was born from a deep appreciation for Korean skincare innovation and the belief that effective products should be accessible to everyone.</p>
          <p className=' text-sm md:text-lg'> We combine time-tested Korean ingredients with modern science to create formulations that deliver visible results. Each product is meticulously crafted to honor the tradition of the multi-step skincare ritual while fitting seamlessly into your daily routine.</p>

          <div>
            <Link to={"/about"} className=' text-sm md:text-[16] border hover:border-black border-transparent rounded-full px-3 md:px-7 py-1.5 md:py-3.5 bg-white text-black hover:bg-transparent hover:text-black cursor-pointer active:scale-95 transition-all duration-300 '>About Us</Link>
          </div>
        </div>

        <div className='flex-1'>
          <img src={skinCareImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OurSkinCare