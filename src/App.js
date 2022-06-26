import React from 'react'
import Header from './component/Header/Header'
import './App.css'
import Home from './component/Hero/Home'
import Features from './component/Features/Features'
import Portfolio from './component/Portfolio/Portfolio'
import Resume from './component/Resume/Resume'
import Testimonial from './component/Testimonial/Testimonial'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
    </>
  )
}

export default App