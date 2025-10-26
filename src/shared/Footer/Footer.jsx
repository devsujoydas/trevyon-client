import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';


const Footer = () => {
  return (
    <div className='w-main md:pb-10 pb-5 '>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5  py-10'>

        <div className='col-span-1 space-y-5'>

          <HeaderLogo />


          <p className='text-sm md:text-lg text-zinc-600'>Lorem ipsum dolor sit amet consectetur. <br /> Scelerisque lectus habitasse adipiscing.</p>
          <div className='text-[#F092B0] flex text-2xl items-center gap-2'>
            <FaFacebook />
            <FaInstagram />
            <FaWhatsappSquare />
          </div>
        </div>


        <div className='col-span-2 grid grid-cols-2'>
          <div className=' text-sm md:text-lg'>
            <h1 className='text-xl md:text-3xl mb-3 md:mb-5'>Shop</h1>
            <div className='grid gap-1.5 md:gap-3'>
              <Link to={"/products"}>All Products</Link>
              <a href={"#Bestsellers"}>Bestsellers</a>
              <a href={"#NewArrive"}>New Arrivals</a>
              <a href={"#ratings"}>Ratings</a>
            </div>
          </div>

          <div className=' text-sm md:text-lg'>
            <h1 className='text-xl md:text-3xl mb-3 md:mb-5'>About</h1>
            <div className='grid gap-1.5 md:gap-3'>
              <Link to={"/about"}>About Us</Link>
              <Link to={"/contact"}>Contact Us</Link>
              <Link to={"/"}>Shipping & Returns</Link>
              <Link to={"/"}>Privacy Policy</Link>
            </div>
          </div>
        </div>

      </div>





      <hr className='text-zinc-400' />
      <div className='py-5'>
        <h1>© 2025 Seoul Mirage. All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Footer