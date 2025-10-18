import { User } from 'lucide-react'
import React from 'react'
import UserInformation from './UserInformation'
import ShippingAddress from './ShippingAddress'
import ChangePassword from './ChangePassword'

const Profile = () => {
    return (
        <div className='w-main space-y-14'>
            <UserInformation />
            <ShippingAddress />
            <ChangePassword />
        </div>
    )
}

export default Profile