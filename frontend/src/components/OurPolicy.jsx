import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
      <div className='flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-8 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
  
          <div className='max-w-xs'>
              <img src={assets.exchange_icon} className='w-16.2 h-16 m-auto mb-5' alt="" /> 
              <p className='font-semibold'>Easy Exchange Policy</p>
              <p className='text-gray-400'>Simplify exchanges with our flawless, customer-focused policy designed for your comfort!</p>
          </div>
  
          <div className='max-w-xs'>
              <img src={assets.quality_icon} className='w-16 h-16 m-auto mb-5' alt="" /> 
              <p className='font-semibold'>7 Days Return Policy</p>
              <p className='text-gray-400'>Enjoy peace of mind with our exclusive 7-day hassle-free return policy, making returns effortless and risk-free!</p>
          </div>
  
          <div className='max-w-xs'>
              <img src={assets.support_image} className='w-16 h-16 m-auto mb-5' alt="" /> 
              <p className='font-semibold'>Over the top customer support</p>
              <p className='text-gray-400'>Experience top-notch service with our world-class support, prioritizing your satisfaction!</p>
          </div>
  
      </div>
    )
  }
  
  export default OurPolicy;
  