import React from 'react'
import MainSection from './MainSection'
import ImageSlider from './ImageSlider'
import Message from '../Message'
import FeaturePage from '../FeaturePage'
import About from '../About'
import Footer from '../Footer'
const Home = () => {
  return (
    <>
    <ImageSlider/>
    <MainSection/>
    <FeaturePage/>
    <About/>
    <Message/>
    <Footer/>
    </>
  )
}

export default Home