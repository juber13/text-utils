import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-between items-center px-4 pt-2 bg-gray-200 h-[50px]'>
            <div className="left">
                <ul className='flex gap-3 items-center'>
                    <li className='text-xl text-blue-300'><Link to="/">TextUtils</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="right">
                <div className='dark-mode'></div>
                <p>Enable Dark Mode</p>
            </div>
        </header>
    )
}

export default Header