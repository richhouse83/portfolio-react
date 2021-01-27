import React from "react";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-text">
        <h2>Experience</h2>
        <p>I have knowledge and experience of the following:</p>
        <ul>
          <li>
            <h3>
              <i className="fab fa-html5"></i>{" "}
              <i className="fab fa-css3-alt"></i> HTML and CSS
            </h3>
            <p>
              I began building websites before CSS was really a thing. Over the
              years I've sought to constantly improve upon my knowledge of both
              HTML and CSS, and have built websites for friends, colleagues and
              myself.
            </p>
          </li>
          <li>
            <h3>
              <i className="fab fa-js-square"></i> JavaScript
            </h3>
            <p>
              I am currently completing the{" "}
              <a
                href="https://northcoders.com/"
                target="_blank"
                rel="noreferrer"
              >
                Northcoders
              </a>{" "}
              Web Development Pathway, and have spent the last year building a
              firm knowledge of JS fundamentals.
            </p>
          </li>
          <li>
            <h3>
              MongoDB, Express, React, Node.js, SQL, Phaser.js, Vue.js and other
              JS libraries and frameworks
            </h3>
            <h3>
              <i className="fab fa-react">
                {" "}
                <i className="fab fa-node-js"></i>{" "}
                <i className="fab fa-vuejs"></i>
              </i>
            </h3>
            <p>Including PostgreSQL, SQLite3, Knex, jQuery and others.</p>
          </li>
          <li>
            <h3>
              Working knowledge of Swift, Python, C and other programming
              languages
            </h3>
            <h3>
              <i className="fab fa-swift"></i> <i className="fab fa-python"></i>
            </h3>
          </li>
          <li>
            <h3>
              Knowledge of Wordpress, other WYSIWYG tools, and MS Office
              (including Excel)
            </h3>
            <h3>
              <i className="fab fa-wordpress"></i>{" "}
              <i className="fab fa-microsoft"></i>
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
