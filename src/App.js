import React from 'react'
import Header from "./component/Head/Header"
import "./App.css"
import Home from "./component/Hero/home"
import About from './component/About/About'
import Skills from './component/Skills/Skills'


const App = () => {
  return (
    <>
      <Header />
      <Home />      
      <About />
      <Skills />
    </>
  )
  

}

export default App