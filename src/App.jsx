import { useState } from 'react'
import './App.css'
import './index.js'
import { ThemeProvider } from './context/ThemeContext';
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );  
}

export default App
