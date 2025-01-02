import React from 'react'

const ProjectCard = ({ imgSrc, title, text, tech }) => {
    return (
      <div className="card mb-3">
        <img src={imgSrc} className="card-img-top" alt="Card image" />
        <div className="card-body" style={{ textAlign: 'justify' }}>
          <h6 className="card-title fw-bold">{title}</h6>
          <p className="card-text">{text}</p>
          <p className="card-text"><strong>Technologies Used: </strong> <em>{tech}</em></p>
        </div>
      </div>
    );
  }

export default ProjectCard
