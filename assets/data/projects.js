import tech from "./tech";

const projects = [
{
    title: "Say-It",
    tech : [tech.Vue, tech.JS, tech.TS],
    description:
      "Typing sucks, say the words instead and the text will be generated for you.",
    image_cover: require("@/assets/avatar.jpg"),
    github_url: "https://github.com/AsaoluElijah/say-it/",
    link: "https://asaoluelijah.github.io/say-it",
  },
  {
    title: "Proton",
    tag: "Chrome-Extention, Coming Soon!",
    tech : [tech.Vue, tech.JS, tech.TS],
    description:
      "Proton charges you with positivity when you open a new chrome tab, plus you also get worldwide latest info.",
    image_cover: require("@/assets/avatar.jpg"),
    github_url: "",
    link: "",
  },
  {
    title: "Qr-Generator",
    tag: "Progressive Web App",
    tech : [tech.Vue, tech.JS, tech.TS],
    description:
      "Easily share secret messages with friends by converting text to qrcode.",
    image_cover: require("@/assets/avatar.jpg"),
    github_url: "https://github.com/AsaoluElijah/qrcode",
    link: "https://asaoluelijah.github.io/qrcode/",
  }
];

export default projects;