import React from 'react'
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 px-4 font-medium'>
      
      <img src={assets.logo} className='w-36' alt="" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 ml-auto'>
        <NavLink to='/' classname=' flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' classname=' flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' classname=' flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' classname=' flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

    </div>
  )
}

export default Navbar
