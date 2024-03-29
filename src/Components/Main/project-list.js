const projects = [
  {
    title: "c-AR-d",
    date: "February 2021",
    link: "https://lnkd.in/e5PQ6yn",
    github: "https://github.com/richhouse83/c-ar-d",
    imgsrc: "/portfolio-react/images/c-ar-d.png",
    imgalt: "still of the video presentation for c-AR-d",
    description: (
      <p>
        A bespoke animated AR viewer which allows users to send personalised
        birthday messages with a bit more pizzazz than your standard greeting
        card. Recipients can view their AR birthday messages in the app or using
        a browser on mobile or desktop to read the unique QR code. The video
        message is then displayed in the bespoke animated AR viewer. Once sent,
        the message is stored and can be viewed again and again using the QR
        code. Developed within a team as the final project for the Northcoders
        Coding Bootcamp.
      </p>
    ),
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "React Native",
      "AWS",
      "Lambda",
      "A-Frame",
      "AR.js",
    ],
    tags: ["Featured", "Longer Project", "React", "JavaScript"],
  },
  {
    title: "Rheddit",
    date: "February 2021",
    link: "http://rheddit.surge.sh/",
    github: "https://github.com/richhouse83/rheddit",
    imgsrc: "/portfolio-react/images/rheddit.png",
    imgalt: "still of the rheddit app",
    description: (
      <p>
        A full stack social media site, with the ability to create topics, post
        and delete articles and comments, all handled in a RESTful api
      </p>
    ),
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Axios",
      "Express.js",
      "PostgreSQL",
    ],
    tags: ["Featured", "Longer Project", "React", "JavaScript"],
  },
  {
    title: "Tetris Clone",
    date: "March 2021",
    link: "https://github.com/richhouse83/tetris-clone",
    github: "https://github.com/richhouse83/tetris-clone",
    imgsrc: "/portfolio-react/images/tetris-clone.png",
    imgalt: "still of the tetris-clone game",
    description: (
      <p>
        A Tetris Clone built as a personal project to explore Gesture Controls
        on React Native. Unfortunately coding this project this didn't make me
        any better at playing it!
      </p>
    ),
    technologies: ["JavaScript", "Expo", "React Native"],
    tags: ["Longer Project", "JavaScript"],
  },
  {
    title: "Zoom Quiz Generator",
    date: "January 2021",
    link: "http://salty-comb.surge.sh/",
    github: "https://github.com/richhouse83/zoom-quiz",
    imgsrc: "/portfolio-react/images/zoom-quiz.png",
    imgalt: "still of the zoom quiz app",
    description: (
      <p>
        A simple zoom quiz generator, built using React, Axios and implementing
        use of the Open Trivia Database.
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "React", "Axios"],
    tags: ["Featured", "Quick", "React", "JavaScript", "Games"],
  },
  {
    title: "Mario Clone using procedural generation of levels",
    date: "Q4 2020",
    link: "https://richhouse83.github.io/marioClone/",
    github: "https://github.com/richhouse83/marioClone",
    imgsrc: "/portfolio-react/images/marioclone.jpeg",
    imgalt: "still of the mario clone",
    description: (
      <p>
        Written using Phaser.js, this project has been to experiment with
        Phaser, procedural generation and game creation. Purely for
        demonstration purposes.
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "Phaser.js"],
    tags: ["Games", "JavaScript"],
  },
  {
    title: "GigSafe React site",
    date: "September 2020",
    github:
      "https://github.com/richhouse83/studyProjects/tree/main/covidGig/gigsafe",
    imgsrc: "/portfolio-react/images/gigsafe.jpeg",
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
    tags: ["React", "JavaScript", "Longer project"],
  },
  {
    title: "Sign Up Form Demo",
    date: "January 2021",
    github:
      "https://github.com/richhouse83/richhouse83.github.io/blob/master/signup-form.html",
    link: "https://richhouse83.github.io/signup-form.html",
    imgsrc: "/portfolio-react/images/sign-up2.png",
    imgalt: "still of the sign up demo form",
    description: (
      <p>
        A demonstration of a sign up page, using reg ex validation, built using
        the Bootstrap Framework. No data is collected
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    tags: ["Quick", "Bootstrap", "JavaScript", "CSS"],
  },
  {
    title: "ask.Teacher",
    date: "January 2021",
    github: "https://github.com/richhouse83/vue-example",
    link: "https://richhouse83.github.io/vue-example/",
    imgsrc: "/portfolio-react/images/ask-teacher.png",
    imgalt: "still of the ask.Teacher app",
    description: (
      <p>
        A demonstration of a question and answer system for remote learning,
        built using Vue with no backend.
      </p>
    ),
    technologies: ["JavaScript", "HTML", "CSS", "Vue"],
    tags: ["Quick", "Vue", "JavaScript"],
  },
  {
    title: "The Roadie Cookbook",
    date: "Q2 2020 (ongoing)",
    github: "http://theroadiecookbook.com",
    link: "http://theroadiecookbook.com",
    imgsrc: "/portfolio-react/images/trc1.jpeg",
    imgalt: "still of theRoadieCookbook website",
    description: (
      <p>
        A cookbook site built with Wordpress for a charity project being worked
        on by myself and a few friends.
      </p>
    ),
    technologies: ["JavaScript", "HTML", "WordPress"],
    tags: ["Longer Project", "HTML"],
  },
  {
    title: "Pong Clone",
    date: "September 2020",
    github: "https://github.com/richhouse83/pong",
    imgsrc: "/portfolio-react/images/pong.jpeg",
    imgalt: "still of Pong Clone",
    description: (
      <p>
        Written using Lua's LÖVE framework, this is a basic Pong game which
        adapts it's difficulty as you win. Adapted from the CS50 Game Dev track
      </p>
    ),
    technologies: ["Lua", "LÖVE"],
    tags: ["Games", "Lua", "LÖVE"],
  },
  {
    title: "Pokemon Battler CLI Game",
    date: "January 2021",
    github: "https://github.com/richhouse83/pokemon-battler-2",
    imgsrc: "/portfolio-react/images/pokemon-battler.png",
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
    tags: ["Featured", "Games", "JavaScript", "Node"],
  },
  {
    title: "Bug Invaders",
    date: "October 2020",
    link: "https://richhouse83.github.io/bugInvaders/index.html",
    github: "https://github.com/richhouse83/bugInvaders",
    imgsrc: "/portfolio-react/images/buginvaders2.jpeg",
    imgalt: "still of Bug Invaders",
    description: (
      <p>Space Invaders copy, extended from a Codecademy project.</p>
    ),
    technologies: ["JavaScript", "HTML", "Phaser.js"],
    tags: ["Games", "Quick", "JavaScript"],
  },
  {
    title: "VR Solar System",
    date: "November 2020",
    github:
      "https://github.com/richhouse83/richhouse83.github.io/blob/master/solarsystem.html",
    link: "https://richhouse83.github.io/solarsystem.html",
    imgsrc: "/portfolio-react/images/solarsystem.jpeg",
    imgalt: "still of VR Solar System App",
    description: <p>Solar System model built using A-Frame VR.</p>,
    technologies: ["HTML", "A-Frame"],
    tags: ["Quick", "VR"],
  },
];

export default projects;
