import { ArrowRight, CircleX } from 'lucide-react'
import { Link } from 'react-router-dom'
 
const PaymentCencel = () => {
  return (
    <div className='bg-[#F9E4CB] h-[85vh] flex justify-center items-center'>
            <div className='text-center space-y-10'>
                <div className='flex justify-center items-center'>
                    <div className=' bg-[#A52D2C] text-white p-5 rounded-full'>
                        <CircleX size={66} />
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-semibold text-zinc-700'>Oops! Your Payment Wasn’t  ! <span className='text-[#A52D2C]'>Completed</span>  !</h1>
                    <p className='text-[18px] text-zinc-600 mt-2'>It looks like your transaction was canceled—please double-check your details and try again.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <Link to={"/products"} className='flex items-center gap-2 border border-transparent hover:border-black  px-6 py-3 rounded-md cursor-pointer active:scale-95 transition-all duration-300 bg-black hover:bg-transparent text-white hover:text-black'> Continue Shopping<ArrowRight className='w-5' /></Link>
                </div>

            </div>
        </div>
  )
}

export default PaymentCencel