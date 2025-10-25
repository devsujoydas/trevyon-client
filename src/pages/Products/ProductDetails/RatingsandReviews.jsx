import { IoStar } from 'react-icons/io5'
import reviewUserImg1 from "../../../assets/product_details/rating_user_profile.png"

const ReviewUserCard = ({ reviewUser }) => { 
    return (
        <div>
            <div className='flex flex-row gap-5'>
                <div className=''>
                    <div className='w-14'>
                        <img src={reviewUserImg1} className=' h-full w-full' alt="" />
                    </div>
                </div>
                <div className='flex flex-col justify-between w-3/4 space-y-10 '>
                    <div className=''>
                        <div className='mb-5 flex items-center gap-0.5 text-xl '>
                            {reviewUser.rating >= 1 && <IoStar />}
                            {reviewUser.rating >= 2 && <IoStar />}
                            {reviewUser.rating >= 3 && <IoStar />}
                            {reviewUser.rating >= 4 && <IoStar />}
                            {reviewUser.rating >= 5 && <IoStar />}
                            <h1 className='ml-3'>
                                ({reviewUser?.rating})
                            </h1>

                        </div>


                        <p className='text-lg'>"{reviewUser?.comment}"</p>
                    </div>
                    <div>
                        <h1 className='font-semibold '>{name}</h1>
                        <p>{ }</p>
                    </div>
                </div>
            </div>
            <hr className='text-zinc-400 my-5' />
        </div>
    )
}

const RatingsandReviews = ({ product }) => {

    return (
        <div className='bg-[#F5D2A899] py-30'>
            <div className='w-main flex items-start gap-10'>

                <div className=' w-5/12 space-y-10'>
                    <h1 className='font-semibold text-5xl'>Ratings and Reviews</h1>
                    <div className="flex items-center gap-0.5 text-xs md:text-lg">
                        <IoStar className="inline-block" />
                        <IoStar className="inline-block" />
                        <IoStar className="inline-block" />
                        <IoStar className="inline-block" />
                        <IoStar className="inline-block" />
                        <span className="ml-2">{product?.rating?.reviews?.length} Reviews</span>
                    </div>
                    <button className='border hover:border-black border-transparent rounded-full px-7 py-3.5 bg-white text-red-600 hover:bg-transparent hover:text-black cursor-pointer active:scale-95 transition-all duration-300'>Write a Review</button>
                </div>

                <div className='w-7/12 grid gap-5'>
                    <div>
                        {/* {reviewUserData.map(reviewUser => reviewUserCard(reviewUser))} */}
                        {product?.rating?.reviews.map((reviewUser, idx) => <ReviewUserCard key={idx} reviewUser={reviewUser} />)}
                    </div>
                    <div>
                        <button className='flex items-center gap-2 border border-transparent hover:border-black  px-6 py-3 rounded-md cursor-pointer active:scale-95 transition-all duration-300 bg-black hover:bg-transparent text-white hover:text-black'> See More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RatingsandReviews