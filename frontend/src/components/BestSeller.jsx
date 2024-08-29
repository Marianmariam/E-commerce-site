import React, { useContext } from 'react'

const BestSeller = () => {

const {products} = useContext(ShopContext);
const [bestSeller, setBestSeller] = usedState([]);

useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestseller))
    setBestSeller(bestProduct.slice(0,5))
},[])

  return (
    <div className='my-10'>
     <div className ='text-center text-3x1 py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        </div> 
    </div>
  )
}

export default BestSeller
