import React from 'react'

const JoinOurCommunity = () => {
    return (
        <div className='w-main flex justify-center items-center flex-col pt-20'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>Join Our Community</h1>
                <p className='text-lg mt-5'>Subscribe to our newsletter for exclusive offers, skincare tips, and new product
                  <br className='md:block hidden'/>  announcements.</p>
            </div>

            <div className='mt-14 '>
            <form className=' flex items-center gap-5'>
                
                <div className='border border-zinc-200 px-6 py-3 w-96 rounded-full'>
                    <input type="email" placeholder='Your email address' className='outline-none w-full h-full' required />
                </div>
                <button className='bg-[#F092B0] hover:bg-[#d42a60] px-6 py-3 rounded-full cursor-pointer active:scale-95 hover:text-white border border-transparent hover:border-[#f12a69] transition-all duration-300'>Subscribe</button>
            </form>
            </div>


        </div>
    )
}

export default JoinOurCommunity
