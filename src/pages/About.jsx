import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { SiKotlin, SiDjango } from "react-icons/si";
import { FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaJava, FaGit, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id='about' className='p-5 mt-5'>
      <div className='container p-5 mt-5'>
        <p className='display-4 mb-5'>ABOUT</p>
        <div className='content'>
          <p className='mt-5 mb-4'> I recently graduated with a <strong>Bachelor of Science in Computer Engineering</strong> from <strong>Batangas State University—The National Engineering University</strong>. Throughout my studies, I developed a strong interest in software development, and artificial intelligence. 
            I’ve been diving into back-end development to enhance my skill set while working on personal projects to further enhance my abilities.
          </p>
        <div>
          <p className='display-5'>techstacks</p>
          <div className='techstacks'>
            <FaHtml5 />
            <FaCss3Alt />
            <FaBootstrap />
            <FaJs />
            <FaReact />
            <FaPython />
            <SiDjango />
            <FaJava />
            <FaGit/>
            <FaGithub/>
            <SiKotlin />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About
