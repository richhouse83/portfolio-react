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
];

export default projects;
