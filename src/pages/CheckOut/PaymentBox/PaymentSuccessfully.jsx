import { ArrowRight, CircleCheckBig } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccessfully = () => {
    return (
        <div className='bg-main h-[90vh] md:h-[85vh] p-10 flex justify-center items-center'>
            <div className='text-center space-y-10'>
                <div className='flex justify-center items-center'>
                    <div className=' bg-[#16A34A] text-white p-5 rounded-full'>
                        <CircleCheckBig size={66} />
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl md:text-3xl font-semibold text-zinc-700'>Your payment has been <span className='text-[#16A34A]'>received</span>  !</h1>
                    <p className='text-sm md:text-[18px] text-zinc-600 mt-2'>Please check your email for a payment confirmation & invoice.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <Link to={"/products"} className='payment-btn'> Continue Shopping<ArrowRight className='w-5' /></Link>
                </div>

            </div>
        </div>
    )
}

export default PaymentSuccessfully
