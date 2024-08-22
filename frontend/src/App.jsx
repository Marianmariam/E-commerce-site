import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import Collection from './pages/Collection'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:pg-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='collection' element={<Collection/>} /> 
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} /> 
      </Routes>

    
    </div>
  )
}

export default App
