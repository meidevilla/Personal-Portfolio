import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className='container d-flex flex-row justify-content-between align-items-center'>
            <h6>© 2025 Angelica Mei De Villa. All rights reserved.</h6>
            <div className='socials-container'>
                <a href='https://www.linkedin.com/in/meidevilla/' target="_blank">
                    <FaLinkedinIn size={30}/>
                </a>
                <a href='https://www.linkedin.com/in/meidevilla/' target="_blank">
                    <FaGithub size={30}/>
                </a>
                <a href='https://www.linkedin.com/in/meidevilla/' target="_blank">
                    <FaInstagram size={30}/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
