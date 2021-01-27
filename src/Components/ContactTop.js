import React from "react";

const ContactTop = () => {
  return (
    <div className="contact-top hidden" id="contact-top">
      <p>
        <i className="fas fa-envelope-open"></i>{" "}
        <a href="mailto:rich@richhouse.co.uk">rich@richhouse.co.uk</a>
      </p>
      <p>
        <i className="fas fa-phone-square-alt"></i>{" "}
        <a href="tel:+447793020106"> +447793020106</a>
      </p>
      <p>
        <i className="fab fa-linkedin"></i>{" "}
        <a
          href="http://www.linkedin.com/in/rich-house-3ab5553a"
          target="_blank"
          rel="noreferrer"
        >
          linkedIn
        </a>
      </p>
      <p>
        <i className="fab fa-twitter-square"></i>{" "}
        <a
          href="https://twitter.com/rich_house"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          twitter{" "}
        </a>
      </p>
      <p>
        <i className="fab fa-facebook-square"></i>{" "}
        <a
          href="https://www.facebook.com/richhouse83"
          target="_blank"
          rel="noreferrer"
        >
          facebook
        </a>
      </p>
      <p>
        <i className="fab fa-github-square"></i>{" "}
        <a
          href="https://github.com/richhouse83/"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </p>
    </div>
  );
};

export default ContactTop;
