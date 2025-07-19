import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Free from '../components/Free'

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Free />
    </div>
  )
}

export default Home