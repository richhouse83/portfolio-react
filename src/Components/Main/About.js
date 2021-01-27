import React from "react";

const paras = [
  ` I am a UK based Web Developer, with over 25 years of amateur experience,
        finally taking the leap into the professional arena.`,
  `I've been playing with code since I learnt to type, and building
        websites since my Dad, who is a software engineer himself, installed our
        first modem.`,
  `After over 15 years in the Live Music industry working with and leading
        large and small teams on some of the biggest stages in the world, I've
        decided to take on a new challenge and move into web development
        full-time. Recently I’ve been focusing on JavaScript, HTML, CSS and SQL
        but I’ve also had experience with C, Python and Swift. I like to write
        clean, maintainable code and love to learn new languages, libraries,
        frameworks and expand my working knowledge.`,
  `I'm passionate about music, travel, my family and my dog 🐶, and I’m
        very keen on working with ethical and progressive companies and
        individuals on projects that benefit the larger community. In my spare
        time I like to work on charity and pet web projects, and I’m currently
        helping to produce The Roadie Cookbook, a project to raise funds for the
        live touring community during the Global Pandemic.`,
  `I'm also a gamer, a musician, a runner and a dad; and I‘m very, very bad
        at cryptic crosswords.`,
];

const About = () => {
  return (
    <section className="about" id="about">
      <h2>Hi, I’m Rich.</h2>
      {paras.map((para) => (
        <p key={para}>{para}</p>
      ))}
    </section>
  );
};

export default About;
