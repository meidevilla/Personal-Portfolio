import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
const Hero = () => {
  return (
    <section id='home' className='p-5'>
        <div className='container p-5 '>
            <p className='fw-bold display-4 mt-5'>ANGELICA MEI DE VILLA</p>
            <h4>Software Developer </h4>
            <h5 className='mt-5 mb-5'>A passionate <strong>Junior Software Developer</strong> with experience in front-end, and Android development,
            currently exploring back-end technologies.</h5>
            <div className='d-flex flex-row justify-content-between'>
                <a className="see-more-btn mb-2" href="#about">
                    <span className='fw-bold'>See more about me</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34" >
                        <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                        <path fill="black"d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
                    </svg>
                </a>
                <div className='socials-link w-50'>
                    <a href='https://www.linkedin.com/in/meidevilla/' target="_blank">
                        <FaLinkedinIn size={25}/>
                    </a>
                    <a href='https://www.linkedin.com/in/meidevilla/' target="_blank">
                        <FaGithub size={25}/>
                    </a>
                    <a href='https://www.linkedin.com/in/meidevilla/' target="_blank">
                        <FaInstagram size={25}/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
