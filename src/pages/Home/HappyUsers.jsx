import happyUserImg1 from '../../assets/happy_user/happy_User_1.png'
import happyUserImg2 from '../../assets/happy_user/happy_User_2.png'
import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'


const happyUserCard = ({ img, name, comment }) => {
  return (
    <div className='flex gap-5 md:gap-10'>
      <div className='w-1/3'>
        <img src={img} alt="" />
      </div>

      <div className='w-2/3 flex flex-col gap-2 md:justify-between md:py-5'>
        <div>
          <div className='text-[#F092B0] flex items-center gap-0.5 text-left md:text-2xl pb-5'>
            <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
          </div>
          <p className='md:text-lg text-sm'>"{comment}"</p>
        </div>
        <h1 className='font-semibold text-sm md:text-xl text-zinc-600'>{name}</h1>
      </div>
    </div>
  )
}

const HappyUsers = () => {

  const happyUserData = [
    {
      img: `${happyUserImg1}`,
      name: "Devon Lane",
      comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
    {
      img: `${happyUserImg2}`,
      name: "Devon Leony",
      comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
    {
      img: `${happyUserImg1}`,
      name: "Devon Lane",
      comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
    {
      img: `${happyUserImg2}`,
      name: "Devon Leony",
      comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
  ]

  return (
    <div id='ratings' className='w-main py-5 md:py-14 '>
      <div className='text-center'>
        <p className='text-lg mb-3'>3940+ Happy Users</p>
        <h1 className='text-[#C7A18A] font-bold text-xl md:text-[40px]'>Don’t just take our words</h1>
      </div>

      {/* <div className='grid grid-cols-2 gap-14 py-14'>
       
      </div> */}


      <div className='lg:my-14 my-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className=''
        >
          {happyUserData.map(happyUser => <SwiperSlide>{happyUserCard(happyUser)}</SwiperSlide>)}
        </Swiper>
      </div>
    </div>
  )
}

export default HappyUsers