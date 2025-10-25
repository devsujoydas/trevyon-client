import { IoStar } from 'react-icons/io5'
import { ArrowRight, Minus, Plus, ShoppingBag } from 'lucide-react'
import RatingStars from './RatingStars'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const ProductDetailsTop = ({ product }) => {
    const [showLargeImg, setShowLargeImg] = useState(product?.image)

    useEffect(() => {
        setShowLargeImg(product?.image)
    }, [product])
    
    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => setQuantity(prev => prev + 1)
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

    return (
        <div className="w-main px-3 md:px-0 py-10 md:py-20">
            <div className='flex flex-col md:flex-row gap-10 md:gap-14'>

                <h1 className=' md:hidden block text-3xl md:text-4xl font-semibold'>{product?.name}</h1>

                {/* Images Section */}
                <div className='md:w-7/12 flex flex-col-reverse md:grid grid-cols-15 gap-4 md:gap-7'>
                    {/* Thumbnail Gallery */}
                    <div className='md:col-span-3 flex flex-row md:flex-col gap-3'>
                        {product?.imageGallery.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setShowLargeImg(img)}
                                className='border border-zinc-300 rounded-md h-26 md:h-46 w-full cursor-pointer hover:scale-105 transition-transform duration-200'
                            >
                                <img
                                    className='w-full md:p-0 p-2 h-full object-cover rounded-md'
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Large Image */}
                    <div className='md:col-span-12 relative'>
                        <motion.img
                            className='w-full sticky top-24 border border-zinc-300 rounded-md cursor-zoom-in'
                            src={showLargeImg}
                            alt={product?.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className='md:w-5/12 space-y-8 md:space-y-10'>

                    {/* Name & Rating */}
                    <div>
                        <h1 className=' hidden md:block text-3xl md:text-4xl font-semibold'>{product?.name}</h1>
                        <RatingStars
                            rating={product?.rating?.average}
                            reviewsCount={product?.rating?.reviews?.length}
                        />
                    </div>

                    {/* Price */}
                    <div className='w-fit relative'>
                        {product?.price?.netPrice !== product?.price?.discountPrice && (
                            <p className='absolute -top-4 -right-6 text-lg text-zinc-400 line-through'>
                                ${product?.price?.netPrice}
                            </p>
                        )}
                        <p className='text-3xl md:text-5xl font-semibold'>
                            ${product?.price?.discountPrice || product?.price?.netPrice}
                        </p>
                    </div>

                    {/* Description */}
                    {product?.description && (
                        <div>
                            <h1 className='font-semibold text-xl md:text-2xl mb-2 md:mb-3'>Details</h1>
                            <p className='text-base md:text-lg font-medium'>{product?.description}</p>
                        </div>
                    )}

                    {/* Benefits */}
                    {product?.benefits?.length > 0 && (
                        <div>
                            <h1 className='font-semibold text-xl md:text-2xl mb-2 md:mb-3'>Benefits:</h1>
                            <ul className='space-y-1'>
                                {product?.benefits.map((benefit, idx) => (
                                    <li key={idx} className='flex items-start gap-2'>
                                        <span className='font-bold'>{idx + 1}.</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Ingredients */}
                    {product?.ingredients?.length > 0 && (
                        <div>
                            <h1 className='font-semibold text-xl md:text-2xl mb-2 md:mb-3 uppercase'>Ingredients:</h1>
                            <ul className='space-y-1'>
                                {product?.ingredients.map((ingredient, idx) => (
                                    <li key={idx} className='flex items-start gap-2'>
                                        <span className='font-bold'>{idx + 1}.</span>
                                        <span>{ingredient}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Quantity + Buttons */}
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5'>
                        {/* Quantity */}
                        <div className='flex items-center gap-2'>
                            <button onClick={handleDecrement} className='plus-minus-btn border p-2 rounded-md'>
                                <Minus />
                            </button>
                            <p className='border-2 border-zinc-400 w-12 h-12 rounded-sm flex justify-center items-center text-xl md:text-3xl'>
                                {quantity}
                            </p>
                            <button onClick={handleIncrement} className='plus-minus-btn border p-2 rounded-md'>
                                <Plus />
                            </button>
                        </div>

                        {/* Add to Cart */}
                        <button className='flex items-center gap-2 border border-transparent hover:border-black px-6 py-3 rounded-md cursor-pointer active:scale-95 transition-all duration-300 bg-black hover:bg-transparent text-white hover:text-black'>
                            <ShoppingBag className='w-5' /> Add to Cart
                        </button>

                        {/* Buy Now */}
                        <button className='flex items-center gap-2 border border-transparent hover:border-black px-6 py-3 rounded-md cursor-pointer active:scale-95 transition-all duration-300 bg-black hover:bg-transparent text-white hover:text-black'>
                            Buy Now <ArrowRight className='w-5' />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetailsTop
