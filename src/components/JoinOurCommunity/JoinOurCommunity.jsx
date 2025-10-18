import React from 'react'

const JoinOurCommunity = () => {
    return (
        <div className='w-main flex justify-center items-center flex-col pt-10 pb-5 md:pt-20 md:pb-10 '>
            <div className='text-center'>
                <h1 className=' text-2xl md:text-4xl font-semibold'>Join Our Community</h1>
                <p className='text-sm md:text-lg  mt-3 md:mt-5'>Subscribe to our newsletter for exclusive offers, skincare tips, and new product
                  <br className='md:block hidden'/>  announcements.</p>
            </div>

            <div className='md:mt-14 mt-5 '>
            <form className=' flex items-center gap-2 md:gap-5'>
                
                <div className='border border-zinc-200 px-3 md:px-6 py-1.5 md:py-3 md:w-96 w-full text-sm md:text-[16px] rounded-full'>
                    <input type="email" placeholder='Your email address' className='outline-none w-full h-full' required />
                </div>
                <button className='bg-[#F092B0] hover:bg-[#d42a60] px-3 md:px-6 py-1.5 md:py-3 text-sm md:text-[16px] rounded-full cursor-pointer active:scale-95 hover:text-white border border-transparent hover:border-[#f12a69] transition-all duration-300'>Subscribe</button>
            </form>
            </div>


        </div>
    )
}

export default JoinOurCommunity
