import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Free from '../components/Free'
import Add from '../components/Add'
import Arrive from '../components/Arrive'

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Free />
      <Add />
      <Arrive />
    </div>
  )
}

export default Home