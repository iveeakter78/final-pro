import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Free from '../components/Free'
import Add from '../components/Add'
import Arrive from '../components/Arrive'
import Special from '../components/Special'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Free />
      <Add />
      <Arrive />
      <Special />
      <Footer />
    </div>
  )
}

export default Home