const Experience = () => {
  const certifications = [
    {link: "https://www.credly.com/badges/2efa2e5a-5ba5-4907-9645-eb6a6c140637/public_url", text: "AWS Certified Cloud Practitioner - Attained April 2022"},
    {text: "Northcoders Web Developer Bootcamp - Graduated February 2021"},
    {link: "https://courses.edx.org/certificates/ecc2615fcceb404987bcc4964136eac9", text: "CS50x Introduction To Computer Science Attained January 2021"},
    {text: "St John's Ambulance Mental Health First Aider - Attained February 2022"},
  ]
  return (
    <section className="experience" id="experience">
      <div className="experience-text">
        <h2>Certification</h2>
        {certifications.map(({link, text}) => (
          link
          ? <a href={link} key={text} target="_blank" rel="noreferrer"><h3>{text}</h3></a>
          : <h3 key={text}>{text}</h3>
        ))}
        <h2>Experience</h2>
        <p>I have knowledge and experience of the following:</p>
        <ul>
          <li>
            <h3>
              <i className="fab fa-js-square"></i> JavaScript and TypeScript
            </h3>
            <p>
              I have worked heavily with JS since 2020, and have been working with TS professionally since 2021
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
