import React from 'react'
import { MdEmail } from 'react-icons/md'

const OthersWayToReachUs = () => {
    return (
        <div className='bg-[#F9E4CB]'>
            <div className="w-main py-20">
                <h1 className='text-4xl pb-10'>Other Ways to Reach Us</h1>
                <div className="grid grid-cols-3 ">
                    <div>
                        <div>
                            <MdEmail />
                        </div>
                        <div>
                            <h1>Email</h1>
                            <h1>devsujoydas@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OthersWayToReachUs