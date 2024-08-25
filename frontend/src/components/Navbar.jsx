import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 px-4 font-medium'>
      
      <img src={assets.logo} className='w-36' alt="" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 ml-auto'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-6 cursor-pointer ml-4' alt="Search" />
        
        <div 
          className='relative'
          onMouseEnter={() => setIsMenuVisible(true)}
          onMouseLeave={() => setIsMenuVisible(false)}
        >
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile" />
          
          {/* Dropdown Menu */}
          {isMenuVisible && (
            <div className='absolute right-0 mt-2 w-36 bg-slate-100 border border-gray-200 rounded-lg shadow-lg'>
              <div className='flex flex-col gap-2 py-3 text-gray-500'>
                <p className='cursor-pointer px-4 hover:text-black'>My Profile</p>
                <p className='cursor-pointer px-4 hover:text-black'>Orders</p>
                <p className='cursor-pointer px-4 hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
