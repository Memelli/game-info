import React from 'react'
import { Link } from 'react-router-dom'
import { FaCannabis } from 'react-icons'

const Navbar = () => {
    return (
        <nav class="flex justify-between items-center h-16 bg-gray-900 text-white relative shadow-md" role="navigation">
            <Link to='/' className="flex drop-shadow-lg drop-shadow-xl pl-8 text-3xl font-serif">
                GameInfo
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="pr-4 hover:text-blue-500" to="/">Inicio</Link>
                <Link className="hover:text-blue-500" to="/sobre">Sobre</Link>
            </div>
        </nav>
    )
}

export default Navbar
