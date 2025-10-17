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


const heroText = (
  <div className='md:h-[850px] h-[100dvh] hero-bg-color w-full  flex justify-center  items-center'>
    <div className='max-w-screen-2xl w-full xl:mx-auto md:mx-10 mx-5 py-20 space-y-10'>
      <h1 className='font-semibold text-6xl'>Discover your skin's true <br /> potential</h1>
      <p className='text-xl'>Premium skincare that combines innovation with clean, effective ingredients for all skin types.</p>
      <div className='text-lg flex gap-5'>
        <Link to={"/products"} className='border border-zinc-200 rounded-full px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white cursor-pointer active:scale-95 transition-all duration-300'>Shop Now</Link>
        <Link to={"/about"} className='border border-zinc-200 rounded-full px-6 py-3 hover:bg-white hover:text-black bg-transparent text-white cursor-pointer active:scale-95 transition-all duration-300 '>About Us</Link>
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
        <SwiperSlide>
          <div className=' text-white bg-no-repeat bg-cover' style={{ backgroundImage: `url('${heroImg1}')` }} >
            <div className='md:h-[850px] h-[100dvh] hero-bg-color w-full  flex justify-center  items-center'>
              {heroText}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='text-white bg-no-repeat bg-cover' style={{ backgroundImage: `url('${heroImg2}')` }} >
            <div className='md:h-[850px] h-[100dvh] hero-bg-color w-full  flex justify-center  items-center'>{heroText}</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=' text-white bg-no-repeat bg-cover' style={{ backgroundImage: `url('${heroImg3}')` }} >
            <div className='md:h-[850px] h-[100dvh] hero-bg-color w-full  flex justify-center  items-center'>{heroText}</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero