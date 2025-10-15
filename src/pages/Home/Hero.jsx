import React from 'react' 

const Hero = () => {
  return (
    <div  
    className='herobg text-white flex items-center justify-baseline'>
      <div className='max-w-screen-2xl w-full xl:mx-auto md:mx-10 mx-5 py-20 space-y-10'>
        <h1 className='font-semibold text-6xl'>Discover your skin's true <br /> potential</h1>
        <p className='text-xl'>Premium skincare that combines innovation with clean, effective ingredients for all skin types.</p>
        <div className='text-lg flex gap-5'>
          <button className='border border-zinc-200 rounded-full px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white cursor-pointer active:scale-95 transition-all duration-300'>Shop Now</button>
          <button className='border border-zinc-200 rounded-full px-6 py-3 hover:bg-white hover:text-black bg-transparent text-white cursor-pointer active:scale-95 transition-all duration-300 '>About Us</button>
        </div>
      </div>
    </div>
  )
}

export default Hero