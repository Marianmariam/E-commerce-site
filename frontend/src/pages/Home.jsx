import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    <div>
      <Hero/>

      <BestSeller/>
      <LatestCollection/>
    </div>
  )
}

export default Home
