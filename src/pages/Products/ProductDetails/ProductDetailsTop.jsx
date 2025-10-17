import { IoStar } from 'react-icons/io5'
import productImgLg from '../../../assets/product_details/product_details_lg.png'
import productImgSm1 from '../../../assets/product_details/product_details_sm_1.png'
import productImgSm2 from '../../../assets/product_details/product_details_sm_2.png'
import productImgSm3 from '../../../assets/product_details/product_details_sm_3.png'
import productImgSm4 from '../../../assets/product_details/product_details_sm_4.png'
import { ArrowRight, Minus, Plus, ShoppingBag } from 'lucide-react'


const ProductDetailsTop = () => {
    return (
        <div className="w-main pt-20">
            <div className='flex gap-14'>

                <div className='w-7/12 grid grid-cols-15 gap-7'>
                    <div className='col-span-3 flex flex-col gap-6 '>
                        <div><img className='w-full' src={productImgSm1} alt="" /></div>
                        <div><img className='w-full' src={productImgSm2} alt="" /></div>
                        <div><img className='w-full' src={productImgSm3} alt="" /></div>
                        <div><img className='w-full' src={productImgSm4} alt="" /></div>
                    </div>
                    <div className='col-span-12 '>
                        <img className='w-full' src={productImgLg} alt="" />
                    </div>
                </div>


                <div className='w-5/12 space-y-10'>

                    <div>
                        <h1 className='text-4xl font-semibold'>Product 1</h1>
                        <div className="flex items-center gap-0.5 text-xs md:text-lg">
                            <IoStar className="inline-block" />
                            <IoStar className="inline-block" />
                            <IoStar className="inline-block" />
                            <IoStar className="inline-block" />
                            <IoStar className="inline-block" />
                            <span className="ml-2">157 Reviews</span>
                        </div>
                    </div>

                    <div className=' w-fit relative'>
                        <p className='absolute -top-4 -right-6 text-lg text-zinc-400'>$99</p>
                        <p className='text-5xl font-semibold'>$49</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-2xl mb-3'>Details</h1>
                        <p className='text-xl font-medium'>Figma ipsum component variant main layer. Opacity draft.</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-2xl mb-3'>STRAIGHT UP:</h1>
                        <p className='text-lg text-zinc-600 tracking-tighter'>Lorem ipsum dolor sit amet consectetur. Augue dui sed sit tristique elementum. Nullam tortor lectus dolor tristique ac. Tincidunt feugiat gravida amet sed cras posuere nulla suspendisse. Cursus elementum condimentum at.</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-2xl mb-3'>THE LOWDOWN:</h1>
                        <p className='text-lg tracking-tighter font-medium'>Helps improve the look of pores in just 1 week.
                            Brightens and evens skin tone with every sleep.
                            Kalahari Melon and Baobab Oils infuse deep, all-night hydration.
                            Plumps skin and improves the look of wrinkles instantly and over time.
                            Rich yet lightweight gel-cream provides deep hydration for all skin types.</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-2xl mb-3'>What else?!</h1>
                        <p className=' font-medium text-lg tracking-tighter'>Lorem ipsum dolor sit amet consectetur. In tempus vel amet etiam vehicula. In.</p>
                    </div>



                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-2'>
                            <button className='plus-minus-btn'><Minus /></button>
                            <p className='border-2 border-zinc-400  w-12 h-12 rounded-sm flex justify-center items-center text-3xl  bg-transparent  text-black  transition-all'>1</p>
                            <button className='plus-minus-btn'><Plus /></button>
                        </div>
                        <div>
                            <button className='flex items-center gap-2 border border-transparent hover:border-black  px-6 py-3 rounded-md cursor-pointer active:scale-95 transition-all duration-300 bg-black hover:bg-transparent text-white hover:text-black'><ShoppingBag className='w-5' /> Add to Cart</button>
                        </div>
                        <div>
                            <button className='flex items-center gap-2 border border-transparent hover:border-black  px-6 py-3 rounded-md cursor-pointer active:scale-95 transition-all duration-300 bg-black hover:bg-transparent text-white hover:text-black'> Buy Now<ArrowRight className='w-5' /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetailsTop