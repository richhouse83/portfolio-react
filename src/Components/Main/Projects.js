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
          return <ProjectItem project={project} key={project.link} />;
        })}
        <li className="project-item">
          <h4>
            <a href="signup-form.html" target="_blank" rel="noreferrer">
              Sign Up Form Demo
            </a>{" "}
            <span className="date">-- January 2020</span>
            <p>
              <i className="fab fa-github-square"></i>{" "}
              <a
                href="https://github.com/richhouse83/richhouse83.github.io/blob/master/signup-form.html"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </p>
          </h4>
          <a href="signup-form.html" target="_blank" rel="noreferrer">
            <img alt="" src="/images/sign-up.png" className="demopics" />
          </a>
          <p>
            A demonstration of a sign up page, using reg ex validation, built
            using the Bootstrap Framework. No data is collected
          </p>
          <h5>Technologies Used</h5>
          <ul className="tech-grid">
            <li className="tech">JavaScript</li>
            <li className="tech">HTML</li>
            <li className="tech">CSS</li>
            <li className="tech">Bootstrap</li>
          </ul>
        </li>
        <li className="project-item">
          <h4>
            <a
              href=" https://richhouse83.github.io/vue-example/"
              target="_blank"
              rel="noreferrer"
            >
              ask.Teacher
            </a>{" "}
            <span className="date">-- January 2020</span>
            <p>
              <i className="fab fa-github-square"></i>{" "}
              <a
                href="https://github.com/richhouse83/vue-example"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </p>
          </h4>
          <a
            href="https://richhouse83.github.io/vue-example/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" src="/images/ask-teacher.png" className="demopics" />
          </a>
          <p>
            A demonstration of a question and answer system for remote learning,
            built using Vue with no backend.
          </p>
          <h5>Technologies Used</h5>
          <ul className="tech-grid">
            <li className="tech">JavaScript</li>
            <li className="tech">HTML</li>
            <li className="tech">CSS</li>
            <li className="tech">Vue</li>
          </ul>
        </li>
        <li className="project-item">
          <h4>
            <a
              href="http://theroadiecookbook.com"
              target="_blank"
              rel="noreferrer"
            >
              The Roadie Cookbook
            </a>{" "}
            <span className="date">-- Q2 2020 (ongoing)</span>
          </h4>
          <a
            href="http://theroadiecookbook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" src="/images/trc1.jpeg" className="demopics" />
          </a>
          <p>
            A cookbook site built with Wordpress for a charity project being
            worked on by myself and a few friends.
          </p>
          <h5>Technologies Used</h5>
          <ul className="tech-grid">
            <li className="tech">HTML</li>
            <li className="tech">CSS</li>
            <li className="tech">WordPress</li>
          </ul>
        </li>
        <li className="project-item">
          <h4>
            <i className="fab fa-github-square"></i>{" "}
            <a
              href="https://github.com/richhouse83/pong"
              target="_blank"
              rel="noreferrer"
            >
              Pong Clone
            </a>{" "}
            <span className="date">-- September 2020</span>
          </h4>
          <a
            href="https://github.com/richhouse83/pong"
            target="_blank"
            rel="noreferrer"
          >
            <img className="demopics" alt="" src="/images/pong.jpeg" />
          </a>
          <p>
            Written using Lua's LÖVE framework, this is a basic Pong game which
            adapts it's difficulty as you win. Adapted from the CS50 Game Dev
            track
          </p>
          <h5>Technologies Used</h5>
          <ul className="tech-grid">
            <li className="tech">Lua</li>
            <li className="tech">LÖVE</li>
          </ul>
        </li>
        <li className="project-item">
          <h4>
            <i className="fab fa-github-square"></i>{" "}
            <a
              href="https://github.com/richhouse83/pokemon-battler-2"
              target="_blank"
              rel="noreferrer"
            >
              Pokemon Battler CLI Game
            </a>{" "}
            <span className="date">-- January 2021</span>
          </h4>
          <a
            href="https://github.com/richhouse83/pokemon-battler-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="demopics"
              alt=""
              src="/images/pokemon-battler.png"
            />
          </a>
          <p>
            A text based Pokemon Battling game making use of Axios, Inquirer,
            and the{" "}
            <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
              PokeAPI API
            </a>
          </p>
          <ul className="tech-grid">
            <li className="tech">JavaScript</li>
            <li className="tech">Axios</li>
            <li className="tech">Inquirer</li>
            <li className="tech">PokeAPI</li>
          </ul>
        </li>
        <li className="project-item">
          <h4>
            <a
              href="https://richhouse83.github.io/bugInvaders/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Bug Invaders
            </a>{" "}
            <span className="date">-- October 2020</span>
            <p>
              <i className="fab fa-github-square"></i>{" "}
              <a
                href="https://github.com/richhouse83/bugInvaders"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </p>
          </h4>
          <a
            href="https://richhouse83.github.io/bugInvaders/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="demopics"
              s
              alt=""
              rc=".//images/buginvaders2.jpeg"
            />
          </a>
          <p>Space Invaders copy, extended from a Codecademy project.</p>
          <ul className="tech-grid">
            <li className="tech">JavaScript</li>
            <li className="tech">HTML</li>
            <li className="tech">CSS</li>
            <li className="tech">Phaser.js</li>
          </ul>
        </li>
        <li className="project-item">
          <h4>
            <a href="solarsystem.html" target="_blank" rel="noreferrer">
              VR Solar System
            </a>{" "}
            <span className="date">-- November 2020</span>
          </h4>
          <p>
            <i className="fab fa-github-square"></i>{" "}
            <a
              href="https://github.com/richhouse83/richhouse83.github.io/blob/master/solarsystem.html"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </p>
          <a href="solarsystem.html" target="_blank" rel="noreferrer">
            <img alt="" src="/images/solarsystem.jpeg" className="demopics" />
          </a>
          <p>Solar System model built using A-Frame VR. A work in progress.</p>
          <ul className="tech-grid">
            <li className="tech">HTML</li>
            <li className="tech">CSS</li>
            <li className="tech">A-Frame</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
