import React from 'react'
import '../../styles/Sidebar.css'
import Profile from '../sections/Profile'
import Menu from '../sections/Menu'
import Add from '../sections/Add'



const Sidebar = () => {
    return (
        <div className='container_sidebar'>
            <Profile />
            <Menu />
            <Add />
        </div>
    )
}

export default Sidebar
