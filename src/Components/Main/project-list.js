const projects = [
  {
    title: "Zoom Quiz Generator",
    date: "January 2021",
    link: "http://salty-comb.surge.sh/",
    github: "https://github.com/richhouse83/zoom-quiz",
    imgsrc: "/images/zoom-quiz.png",
    imgalt: "still of the zoom quiz app",
    description: (
      <p>
        A simple zoom quiz generator, built using React, Axios and implementing
        use of the Open Trivia Database.
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "React", "Axios"],
  },
  {
    title: "Mario Clone using procedural generation of levels",
    date: "Q4 2020",
    link: "https://richhouse83.github.io/marioClone/",
    github: "https://github.com/richhouse83/marioClone",
    imgsrc: "/images/marioclone.jpeg",
    imgalt: "still of the mario clone",
    description: (
      <p>
        Written using Phaser.js, this project has been to experiment with
        Phaser, procedural generation and game creation. Purely for
        demonstration purposes.
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "Phaser.js"],
  },
  {
    title: "GigSafe React site",
    date: "September 2020",
    github:
      "https://github.com/richhouse83/studyProjects/tree/main/covidGig/gigsafe",
    imgsrc: "/images/gigsafe.jpeg",
    imgalt: "still of the gigsafe app",
    description: (
      <p>
        Proof of concept using React, Express and MongoDB, this is a basic Covid
        tracing system, which would track and alert gig attendees of possible
        Covid transmission. Click{" "}
        <a href="https://youtu.be/AYawDEZ3mZs" target="_blank" rel="noreferrer">
          here
        </a>{" "}
        for a video demonstration. Made as the final project of the CS50 course
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "MongoDb", "Express", "React"],
  },
  {
    title: "Sign Up Form Demo",
    date: "January 2021",
    github:
      "https://github.com/richhouse83/richhouse83.github.io/blob/master/signup-form.html",
    link: "https://richhouse83.github.io/signup-form.html",
    imgsrc: "/images/sign-up.png",
    imgalt: "still of the sign up demo form",
    description: (
      <p>
        A demonstration of a sign up page, using reg ex validation, built using
        the Bootstrap Framework. No data is collected
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "ask.Teacher",
    date: "January 2021",
    github: "https://github.com/richhouse83/vue-example",
    link: "https://richhouse83.github.io/vue-example/",
    imgsrc: "/images/ask-teacher.png",
    imgalt: "still of the ask.Teacher app",
    description: (
      <p>
        A demonstration of a question and answer system for remote learning,
        built using Vue with no backend.
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "Vue"],
  },
  {
    title: "The Roadie Cookbook",
    date: "Q2 2020 (ongoing)",
    github: "http://theroadiecookbook.com",
    link: "http://theroadiecookbook.com",
    imgsrc: "/images/trc1.jpeg",
    imgalt: "still of theRoadieCookbook website",
    description: (
      <p>
        A cookbook site built with Wordpress for a charity project being worked
        on by myself and a few friends.
      </p>
    ),
    technologies: ["JavaScript", "HTML", "WordPress"],
  },
  {
    title: "Pong Clone",
    date: "September 2020",
    github: "https://github.com/richhouse83/pong",
    imgsrc: "/images/pong.jpeg",
    imgalt: "still of Pong Clone",
    description: (
      <p>
        Written using Lua's LÖVE framework, this is a basic Pong game which
        adapts it's difficulty as you win. Adapted from the CS50 Game Dev track
      </p>
    ),
    technologies: ["Lua", "LÖVE"],
  },
  {
    title: "Pokemon Battler CLI Game",
    date: "January 2021",
    github: "https://github.com/richhouse83/pokemon-battler-2",
    imgsrc: "/images/pokemon-battler.png",
    imgalt: "still of Pokemon Battler",
    description: (
      <p>
        A text based Pokemon Battling game making use of Axios, Inquirer, and
        the{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokeAPI API
        </a>
      </p>
    ),
    technologies: ["JavaScript", "Axios", "Node.js", "Inquirer", "PokeAPI"],
  },
  {
    title: "Bug Invaders",
    date: "October 2020",
    github: "https://github.com/richhouse83/bugInvaders",
    imgsrc: "/images/buginvaders2.jpeg",
    imgalt: "still of Bug Invaders",
    description: (
      <p>Space Invaders copy, extended from a Codecademy project.</p>
    ),
    technologies: ["JavaScript", "HTML", "Phaser.js"],
  },
  {
    title: "VR Solar System",
    date: "November 2020",
    github:
      "https://github.com/richhouse83/richhouse83.github.io/blob/master/solarsystem.html",
    link: "https://richhouse83.github.io/solarsystem.html",
    imgsrc: "/images/solarsystem.jpeg",
    imgalt: "still of VR Solar System App",
    description: <p>Solar System model built using A-Frame VR.</p>,
    technologies: ["HTML", "A-Frame"],
  },
];

export default projects;
