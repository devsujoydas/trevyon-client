import { Mail, MapPin, Phone } from 'lucide-react'

const OthersWayToReachUs = () => {
    return (
        <div className='bg-main'>
            <div className="w-main py-10 md:py-30">
                <h1 className=' text-xl md:text-4xl pb-5 md:pb-10'>Other Ways to Reach Us</h1>
                <div className="grid md:grid-cols-3 gap-5 ">
                    <div className='flex gap-3 items-start'>
                        <div>
                            <Mail size={36} className='md:w-fit w-5' />
                        </div>
                        <div>
                            <h1 className=' text-xl md:text-2xl font-semibold pb-1 md:pb-5'>Email</h1>
                            <h1 className=' text-lg md:text-xl'>devsujoydas@gmail.com</h1>
                        </div>
                    </div>
                    <div className='flex gap-3 items-start'>
                        <div>
                            <Phone size={36} className='md:w-fit w-5' />
                        </div>
                        <div>
                            <h1 className='text-xl md:text-2xl font-semibold pb-1 md:pb-5'>Phone</h1>
                            <h1 className='text-lg md:text-xl'>+8801303436299</h1>
                        </div>
                    </div>
                    <div className='flex gap-3 items-start'>
                        <div>
                            <MapPin size={36} className='md:w-fit w-5' />
                        </div>
                        <div>
                            <h1 className='text-xl md:text-2xl font-semibold pb-1 md:pb-5'>Address</h1>
                            <h1 className='text-lg md:text-xl'>Tongi College Gate, Gazipur, Dhaka</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OthersWayToReachUs