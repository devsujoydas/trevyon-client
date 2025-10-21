import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'

import heroImg1 from "../../assets/hero/hero1.png"
import heroImg2 from "../../assets/hero/hero2.png"
import heroImg3 from "../../assets/hero/hero3.png"
import { Link } from 'react-router-dom'


const heroText = (img) => (
  <div className=' text-white bg-no-repeat bg-right bg-cover' style={{ backgroundImage: `url('${img}')` }} >
    <div className='md:h-[900px] h-[450px] bg-[#0e00003f]  w-full  flex justify-center  items-center'>
      <div className='md:h-[900px] w-full flex justify-center  items-center'>
        <div className=' w-main w-full py-20 space-y-5 md:space-y-10'>
          <h1 className='font-semibold md:text-6xl text-3xl'>Discover your skin's true <br className='md:block hidden' /> potential</h1>
          <p className=' text-sm md:text-xl'>Premium skincare that combines innovation with clean, effective ingredients for all skin types.</p>
          <div className=' text-sm md:text-lg flex gap-5'>
            <Link to={"/products"} className='border border-zinc-200 rounded-full md:px-6 px-3 md:py-3 py-1.5 bg-white text-black hover:bg-transparent hover:text-white cursor-pointer active:scale-95 transition-all duration-300'>Shop Now</Link>
            <Link to={"/about"} className='border border-zinc-200 rounded-full md:px-6 px-3 md:py-3 py-1.5 hover:bg-white hover:text-black bg-transparent text-white cursor-pointer active:scale-95 transition-all duration-300 '>About Us</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)



const Hero = () => {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30} effect={'fade'} loop={true}
        modules={[EffectFade, Autoplay]} className='mySwiper'
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide>{heroText(heroImg1)}</SwiperSlide>
        <SwiperSlide>{heroText(heroImg2)}</SwiperSlide>
        <SwiperSlide>{heroText(heroImg3)}</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero