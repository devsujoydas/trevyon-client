import React from 'react'
import JoinOurCommunity from '../../components/JoinOurCommunity/JoinOurCommunity'
import about_hero from "../../assets/about/about_hero.png"
import about_our_journey from "../../assets/about/about_our_journey.png"
import about_our_philosophy from "../../assets/about/about_our_philosophy.png"


const About = () => {
  return (
    <div>

      <div className='bg-[#F9E4CB]'>
        <div className='w-main flex items-center justify-between'>
          <div>
            <h1 className='text-6xl mb-5'>Our <span className='font-semibold'>Story</span></h1>
            <p className='text-2xl'>Seoul Mirage was born from a passion for Korean skincare innovation <br /> and a commitment to creating luxury products that deliver exceptional <br /> results.
            </p>
          </div>
          <div>
            <img src={about_hero} alt="" />
          </div>
        </div>
      </div>

      <div className='w-main flex justify-between items-center gap-10'>
        <div className='flex-1 '>
          <img src={about_our_journey} alt="" />
        </div>
        <div className='flex-1 space-y-10'>
          <h1 className='text-6xl mb-5'>Our Journey</h1>
          <p className='text-2xl text-zinc-500'>Founded in 2018 by skincare enthusiast and biochemist Dr. Ji-Yoon Park, Seoul Mirage began as a small laboratory in the heart of Seoul's beauty district. Frustrated by the prevalence of products with harsh chemicals and unfulfilled promises, Dr. Park set out to create a line that combined traditional Korean ingredients with cutting-edge science.
          </p>
          <p className='text-2xl text-zinc-500'>
            What started as a passion project quickly gained recognition for its exceptional quality and remarkable results. Today, Seoul Mirage has grown into a global brand, but our commitment to purity, efficacy, and luxury remains unchanged.
          </p>

        </div>
      </div>

      <div className='w-main flex justify-between items-center gap-20'>
        <div className='flex-1 space-y-14'>
          <h1 className='text-6xl mb-5'>Our Philosophy</h1>
          <p className='text-2xl text-zinc-500'>Founded in 2018 by skincare enthusiast and biochemist Dr. Ji-Yoon Park, Seoul Mirage began as a small laboratory in the heart of Seoul's beauty district. Frustrated by the prevalence of products with harsh chemicals and unfulfilled promises, Dr. Park set out to create a line that combined traditional Korean ingredients with cutting-edge science.
          </p>

          <div className='border-l-2 pl-5'>
            <h1 className='text-3xl font-semibold'>Purity</h1>
            <p className='text-lg mt-3'>We source the highest quality ingredients and maintain rigorous standards to ensure our products are free from harmful chemicals.</p>
          </div>

          <div className='border-l-2 pl-5'>
            <h1 className='text-3xl font-semibold'>Innovation</h1>
            <p className='text-lg mt-3'>We continuously research and develop new formulations that harness the power of both traditional Korean ingredients and modern scientific breakthroughs </p>
          </div>

          <div className='border-l-2 pl-5'>
            <h1 className='text-3xl font-semibold'>Sustainability</h1>
            <p className='text-lg mt-3'> We are committed to ethical practices, from responsible sourcing to eco-friendly packaging, ensuring our beauty doesn't come at the expense of our planet.</p>
          </div>

        </div>
        <div className='flex-1 '>
          <img src={about_our_philosophy} alt="" />
        </div>
      </div>


      <div className='bg-[#F9E4CB] py-30'>
        <div className='w-main text-center '>
          <h1 className='text-6xl mb-5'>Our Ingredients</h1>
          <p className='text-2xl text-zinc-500'>We believe in the power of nature enhanced by science. Our formulations combine time-honored Korean botanical ingredients with advanced scientific compounds to create products that deliver visible results.
          </p>
        </div>
      </div>




      <JoinOurCommunity />
    </div>
  )
}

export default About