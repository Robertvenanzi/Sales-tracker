import React from 'react'
import Portrait from '../../img/Portrait.png'
import '../../styles/Portrait.css'


const Profile = () => {
    return (
        <div>
            <img className='avatar' src={Portrait} />
        </div>
    )
}

export default Profile
