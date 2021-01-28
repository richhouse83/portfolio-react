import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import projects from "./project-list";
import FilterBy from "./FilterBy";

const Projects = () => {
  const [projectList, setProjectList] = useState([...projects]);
  const [filterMethod, setFilterMethod] = useState("All");

  const filterByFunc = ({ target: { value } }) => {
    setProjectList(() => {
      if (value === "All") return [...projects];
      const newList = projects.filter((project) =>
        project.tags.includes(value)
      );
      return newList;
    });
    setFilterMethod(() => {
      return value;
    });
  };
  return (
    <section className="projects" id="projects">
      <h2>Current and Former Projects</h2>
      <p>Below are just some of the more recent projects I have worked on.</p>
      <FilterBy filterByFunc={filterByFunc} />
      <h4 id="sort-method">Filtering by: {filterMethod}</h4>
      <ul>
        {projectList.map((project) => {
          return <ProjectItem project={project} key={project.github} />;
        })}
      </ul>
    </section>
  );
};

export default Projects;
