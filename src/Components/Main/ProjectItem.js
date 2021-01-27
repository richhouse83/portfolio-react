import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <li className="project-item">
      <h4>
        <a href={project.link} target="_blank" rel="noreferrer">
          {project.title}
        </a>{" "}
        <span className="date">-- {project.date}</span>
        <p>
          <i className="fab fa-github-square"></i>{" "}
          <a href={project.github} target="_blank" rel="noreferrer">
            Source
          </a>
        </p>
      </h4>
      <a href={project.link} target="_blank" rel="noreferrer">
        <img className="demopics" src={project.imgsrc} alt={project.alt} />
      </a>
      {project.description}
      <h5>Technologies Used</h5>
      <ul className="tech-grid">
        {project.technologies.map((tech) => (
          <li className="tech" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ProjectItem;
