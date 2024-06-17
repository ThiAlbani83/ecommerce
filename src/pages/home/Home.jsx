import React from 'react'
import Container from '../../components/Container'
import Hero from './components/Hero'
import Feature from './components/Feature'
import SearchBar from '../../components/SearchBar'
import BestSelling from './components/BestSelling'
import CTA from './components/CTA'
import Featured from './components/Featured'
import Newsletter from './components/Newsletter'

const Home = () => {
  return (
    <main className='flex flex-col gap-10'>
      <Hero />
      <SearchBar />
      <Feature />
      <BestSelling />
      <CTA />
      <Featured />
      <Newsletter />
    </main>
  )
}

export default Home