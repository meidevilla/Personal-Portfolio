import React from 'react'
import ProjectCard from '../components/ProjectCard'
import project1 from '../assets/images/LL-1.png'
import project2 from '../assets/images/SS-1.jpg'
import project3 from '../assets/images/J-1.png'

const Projects = () => {
  return (
    <section id='projects' className='p-5 mt-5'>
        <div className='container p-5 mt-5'>
            <p className='display-4'>PROJECTS</p>
            <div className='row'>
                <div className="col-md-6">
                    <ProjectCard
                        imgSrc={project3}
                        title="Little Lemon Booking Page"
                        text="This Little Lemon Booking Page is a responsive web application developed as part of the Meta Front-End Developer course.
                        It allows users to view available reservation times and make bookings seamlessly across devices."
                        tech="HTML, CSS, JavaScript, React"
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
                <div className="col-md-6">
                    <ProjectCard
                        imgSrc={project2}
                        title="SignSense: Real Time Traffic Sign Detection with Voice Alert System and Temporal Data Integration"
                        text="This project was the focus of my undergraduate thesis and is an Android application developed to detect traffic signs in real-time
                        using the device's camera. It utilizes a machine learning model to recognize different road signs, incorporates a voice alert system,
                        and includes a distance estimation algorithm, all aimed at delivering essential information to drivers to promote safer driving."
                        tech="Android Development (Kotlin), Python, TensorFlow Lite, OpenCV"
                        link="#"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
