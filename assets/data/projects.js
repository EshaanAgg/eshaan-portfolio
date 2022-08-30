import tech from "./tech";

const projects = [
{
    title: "SchoolBus",
    tech : [tech.HTML, tech.CSS, tech.JS, tech.Bootstrap],
    description:
      "Idea to expand Uber into the bus transportation sector to facilitate the movement of students. This project was included in Top 10 of Uber HackTag 2.0 (National Finalists).",
    image_cover: require("@/assets/projects/schoolbus.jpg"),
    github_url: "https://github.com/amyra98/UberHackTag2.0_TeamBugs_Website",
    link: "https://uber-hack-tag2-0-team-bugs-website.vercel.app/",
  },
  {
    title: "Todo App",
    tech : [tech.Nuxt, tech.Vue, tech.JS, tech.TS, tech.Bootstrap],
    description:
      "A modern Todo app that has authentication, adding, updating, deleting, filtering and searching of todos to keep you organised on the go.",
    image_cover: require("@/assets/projects/todo.jpg"),
    github_url: "https://github.com/EshaanAgg/csoc-week3-vue",
    link: "https://eshaanagg-todo.netlify.app/",
  },
  {
    title: "Revenge of the Snake",
    tech : [tech.HTML, tech.CSS, tech.JS, tech.Bootstrap],
    description:
      "Who hasn't played the infamous Snake Game?! This is an attempt to replicate the same classic 'Nokia' phone game, but with better customizations (as each player has his own aesthetic choices) and a variety of never-seen-before boards that will challenge even the best of players.",
    image_cover: require("@/assets/projects/snake.jpg"),
    github_url: "https://github.com/EshaanAgg/Debugit_2022",
    link: "https://eshaanagg.github.io/Debugit_2022/index.html",
  },
  {
    title: "Library Web App",
    tech : [tech.Node, tech.Express, tech.JS, tech.Bootstrap, tech.CSS, tech.MongoDB],
    description:
      "Used Node.js to develop a library management system that uses Passport.js for authentication and MongoDB as backend. The backend and frontend are developed in Express, allowing users to browse, borrow and return books.",
    image_cover: require("@/assets/projects/library.jpg"),
    github_url: "https://github.com/EshaanAgg/csoc22_week4_express",
    link: "https://csoc-2022-library.herokuapp.com/",
  },
  {
    title: "Hangman",
    tech : [tech.HTML, tech.CSS, tech.JS, tech.Bootstrap],
    description:
      "A new twist on the Hangman game with multiple levels of difficulty, timer, high scorers page, hints for players (by showing a few letters when the user needs them) and changeable music settings!",
    image_cover: require("@/assets/projects/hangman.jpg"),
    github_url: "https://github.com/EshaanAgg/CSOC22-Week1",
    link: "https://eshaanagg.github.io/CSOC22-Week1/",
  }
  
];

export default projects;