import React from 'react'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact' className='p-5 mt-5'>
        <div className='container p-5 mt-5'>
            <p className='fw-bold display-4 mb-5'>CONTACT</p>
            <div className='content'>
                <h4 className='mt-5 mb-5'>I’d love to connect with you! Whether you have a question about my work, an opportunity you'd like to discuss, or just want to say hello, feel free to reach out.</h4>
                <div className='contact-information'>
                    <a href="mailto:devilla.angelicamei@gmail.com"><MdEmail size={25} style={{marginRight: "10px"}}/>devilla.angelicamei@gmail.com</a>
                    <a href="tel:+639616014298"><FaPhoneAlt size={20} style={{marginRight: "10px"}}/>+63 961 6014 298</a>
                    <a><MdLocationOn size={20} style={{marginRight: "10px"}}/>Batangas, Philippines</a>
                </div>
            </div>
            </div>
    </section>
  )
}

export default Contact
