import React from 'react'
import Header from "./component/Head/Header"
import "./App.css"
import Home from "./component/Hero/home"
import About from './component/About/About'
import Skills from './component/Skills/Skills'
import Project from './component/Projects/projects'
import Contact from './component/contact/contact'


const App = () => {
  return (
    <>
      <Header />
      <Home />      
      <About />
      <Skills />
      <Project/>
      <Contact/>
    </>
  )
  

}

export default App