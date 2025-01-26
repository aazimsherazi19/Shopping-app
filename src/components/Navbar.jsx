import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className='flex items-center justify-between max-w-6xl h-20 mx-auto'>
      <Link to={'/'}>
      <div className='ml-5'>
        <h1 className='text-red-900 font-bold text-xl sm:text-2xl md:text-3xl tracking-wide '>React Redux Shopping Cart</h1>
      </div>
      </Link>
      <ul className='flex items-center space-x-4 '>
         <Link to={'/'}>
         <li className='list-none text-gray-800 font-semibold '>Home</li>
         </Link>
         <Link to={'/cart'}>
         <li className='list-none text-gray-800 font-semibold '>Cart</li>
         </Link>
      </ul>
    </nav>
  )
}

export default Navbar
