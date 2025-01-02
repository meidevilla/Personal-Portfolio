import React from 'react'
import ProjectCard from '../components/ProjectCard'
import project1 from '../assets/images/LL-1.png'
import project2 from '../assets/images/SS-1.jpg'
import project3 from '../assets/images/J-1.png'

const Projects = () => {
  return (
    <section id='projects' className='p-5 mt-5'>
        <div className='container p-5 mt-5'>
            <p className='display-4 text-center'>PROJECTS</p>
            <div className='row'>
                <div className="col-md-6">
                    <ProjectCard
                        imgSrc={project3}
                        title="Jobify: Job Application Tracker"
                        text="A full-stack web application designed to simplify the job-hunting process by keeping track of job applications in an organized and efficient manner."
                        tech="HTML, CSS, JavaScript, Django"
                        link="#"
                    />
                </div>
                <div className="col-md-6">
                    <ProjectCard
                        imgSrc={project2}
                        title="SignSense: Real Time Traffic Sign Detection with Voice Alert System and Temporal Data Integration"
                        text="An Android application for real-time traffic sign detection, using machine learning to identify road signs,
                        a voice alert system for notifications, and a distance estimation algorithm to enhance driver safety."
                        tech="Android Development (Kotlin), Python, TensorFlow Lite, OpenCV"
                        link="#"
                    />
                </div>
                <div className="col-md-6">
                    <ProjectCard
                        imgSrc={project1}
                        title="Little Lemon Booking Page"
                        text="This Little Lemon Booking Page is a responsive web application developed as part of the Meta Front-End Developer course.
                        It allows users to view available reservation times and make bookings seamlessly across devices."
                        tech="HTML, CSS, JavaScript, React"
                        link="#"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
