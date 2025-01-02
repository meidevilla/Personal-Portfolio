import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram, FaArrowRight } from "react-icons/fa";
import {  IoMdDownload } from "react-icons/io";
const Hero = () => {
  return (
    <section id='home' className='p-5'>
        <div className='container p-5 '>
            <p className='fw-bold display-4 mt-5'>ANGELICA MEI DE VILLA</p>
            <h4>Software Developer </h4>
            <h5 className='mt-5 mb-5'>A passionate <strong>Junior Software Developer</strong> with experience in front-end, and Android development,
            currently exploring backend technologies.</h5>
            <div className='d-flex flex-row justify-content-between'>
                <div className='d-flex flex-row justify-content-between gap-2'>
                    <a className="about-btn mb-2" href="#about">
                        <span className='fw-bold me-2'>ABOUT ME</span>
                        <FaArrowRight size={15} />
                    </a>
                    <a className="get-resume-btn mb-2" href="/path-to-resume.pdf" download>
                        <IoMdDownload size={20} />
                        <span className='fw-bold ms-2'>GET RESUME </span>
                    </a>
                </div>

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
