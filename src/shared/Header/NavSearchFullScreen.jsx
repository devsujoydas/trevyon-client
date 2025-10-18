import React from 'react'
import NavSearch from './NavSearch'

const NavSearchFullScreen = ({setShowSearch} ) => {
    return (
        <div className='absolute inset-0 bg-[#00000079] h-screen flex justify-center items-center'>
            <div className='bg-white p-5  rounded-sm -mt-40
            '>
                <NavSearch setShowSearch={setShowSearch}/>
            </div>
        </div>
    )
}

export default NavSearchFullScreen