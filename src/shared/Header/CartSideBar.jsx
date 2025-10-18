import React from 'react'

const CartSideBar = () => {
    return (
        <div className='fixed inset-0'>
            <div className='grid grid-cols-8'>
                <div className='h-screen col-span-6 bg-[#00000062]'></div>
                <div className='h-screen col-span-2 bg-white'></div>
            </div>
        </div>
    )
}

export default CartSideBar