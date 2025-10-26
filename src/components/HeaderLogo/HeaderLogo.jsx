import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
    return (
        <div>
            <Link to="/" className='font-family-third text-lg sm:text-2xl font-semibold'>
                TREVYON
            </Link>
        </div>
    )
}

export default HeaderLogo