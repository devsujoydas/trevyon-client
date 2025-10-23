import { ArrowRight, CircleX } from 'lucide-react'
import { Link } from 'react-router-dom'
 
const PaymentCencel = () => {
  return (
    <div className='bg-main h-[90vh] md:h-[85vh] flex justify-center items-center p-10'>
            <div className='text-center space-y-10'>
                <div className='flex justify-center items-center'>
                    <div className=' bg-[#A52D2C] text-white p-5 rounded-full'>
                        <CircleX size={66} />
                    </div>
                </div>

                <div>
                    <h1 className=' text-2xl md:text-3xl font-semibold text-zinc-700'>Oops! Your Payment Wasn’t  ! <span className='text-[#A52D2C]'>Completed</span>  !</h1>
                    <p className='text-sm md:text-[18px] text-zinc-600 mt-2'>It looks like your transaction was canceled—please double-check your details and try again.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <Link to={"/products"} className='payment-btn'> Continue Shopping<ArrowRight className='w-5' /></Link>
                </div>

            </div>
        </div>
  )
}

export default PaymentCencel