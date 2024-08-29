import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from './context/ShopContext'; 
import Title from './Title'; // Asigură-te că importi componenta Title corect

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      {/* Poți adăuga aici un map pentru a reda produsele din bestSeller */}
    </div>
  );
}

export default BestSeller;
