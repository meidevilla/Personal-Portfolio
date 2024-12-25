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
            <a className="see-more-btn" href='#about'>See more about me
                <IoIosArrowRoundForward size={30}/>
            </a>
            <div className='socials-link'>
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
    </section>
  )
}

export default Hero
