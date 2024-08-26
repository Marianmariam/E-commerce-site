import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const cartCount = 3; // Exemplu de număr de produse în coș. În mod real, acest lucru poate proveni dintr-o stare globală sau context.

  return (
    <div className='flex items-center justify-between py-5 px-4 font-medium relative'>
      
      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

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
        >
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile" />
          
          {/* Dropdown Menu */}
          {isMenuVisible && (
            <div 
              className='absolute right-0 mt-2 w-36 bg-slate-100 border border-gray-200 rounded-lg shadow-lg'
              onMouseEnter={() => setIsMenuVisible(true)}
            >
              <div className='flex flex-col gap-2 py-3 text-gray-500'>
                <NavLink to='/profile' className='px-4 py-2 hover:bg-gray-200'>Profile</NavLink>
                <NavLink to='/settings' className='px-4 py-2 hover:bg-gray-200'>Settings</NavLink>
                <NavLink to='/logout' className='px-4 py-2 hover:bg-gray-200'>Logout</NavLink>
              </div>
            </div>
          )}
        </div>
        
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {cartCount}
          </p>
        </Link>
        
        {/* Iconul meniului pentru ecranele mici */}
        <img onClick={() => setIsMenuVisible(!isMenuVisible)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
      </div>

      {/* Meniul lateral */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${isMenuVisible ? 'w-full' : 'w-0'}`}>
        
        {/* Închide meniul dacă faci clic pe el */}
        <div className='flex flex-col p-4'>
          <NavLink to='/' className='py-2' onClick={() => setIsMenuVisible(false)}>Home</NavLink>
          <NavLink to='/collection' className='py-2' onClick={() => setIsMenuVisible(false)}>Collection</NavLink>
          <NavLink to='/about' className='py-2' onClick={() => setIsMenuVisible(false)}>About</NavLink>
          <NavLink to='/contact' className='py-2' onClick={() => setIsMenuVisible(false)}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
