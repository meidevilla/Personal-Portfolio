import { useState } from 'react'
import './App.css'
import './index.js'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
