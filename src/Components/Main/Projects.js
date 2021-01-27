import React from "react";
import ProjectItem from "./ProjectItem";
import projects from "./project-list";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Current and Former Projects</h2>
      <p>Below are just some of the more recent projects I have worked on.</p>
      <ul>
        {projects.map((project) => {
          return <ProjectItem project={project} key={project.github} />;
        })}
      </ul>
    </section>
  );
};

export default Projects;
