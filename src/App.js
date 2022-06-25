import React from 'react'
import Header from './component/Header/Header'
import './App.css'
import Home from './component/Hero/Home'
import Features from './component/Features/Features'
import Portfolio from './component/Portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
    </>
  )
}

export default App