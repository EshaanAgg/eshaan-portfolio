<template>
  <b-container class="mt-0 mb-4">
    <b-card class="container shadow-lg rounded teckstack">
        <center>
      <span class="font-weight-bold techstackCaption"> <h3> Technologies I Love ❤️ </h3></span> 
        </center>
      
      <hr>
      <div class="row mt-0">
      <div class="col-md-4">
      <center> Frontend Dev </center>
      <hr>
      <div class="img-content">
        <center>
        <a v-for="(svg, index) in frontend"
        :key="index"
        :href="svg.link"
        class="techLinks"> 
        <i
          class="_icons m-2"
          :id="'techicon:' + index"
          :key="index"
          v-on:mouseover="colorful('techicon:' + index)"
          v-on:mouseleave="colorless('techicon:' + index)"
          :class="svg.iconName"
          v-b-tooltip.hover 
          :title="svg.name"
        />
        </a>
        </center>
      </div>
      </div>

      <div class="col-md-4">
      <center> Backend Dev </center>
      <hr>
      <div class="img-content">
        <center>
        <a v-for="(svg, index) in backend"
        :key="index"
        :href="svg.link"
        class="techLinks"> 
        <i
          class="_icons m-2"
          :id="'techicon2:' + index"
          :key="index"
          v-on:mouseover="colorful('techicon2:' + index)"
          v-on:mouseleave="colorless('techicon2:' + index)"
          :class="svg.iconName"
          v-b-tooltip.hover 
          :title="svg.name"
        />
        </a>
        </center>
      </div>
      </div>

      <div class="col-md-4">
      <center> DevOps </center>
      <hr>
      <div class="img-content">
        <center>
        <a v-for="(svg, index) in devops"
        :key="index"
        :href="svg.link"
        class="techLinks"> 
        <i
          class="_icons m-2"
          :id="'techicon3:' + index"
          :key="index"
          v-on:mouseover="colorful('techicon3:' + index)"
          v-on:mouseleave="colorless('techicon3:' + index)"
          :class="svg.iconName"
          v-b-tooltip.hover 
          :title="svg.name"
        />
        </a>
        </center>
      </div>
      </div>
      </div>
    
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "TechStack",
  data() {
    return {
      frontend: [
        { name:"React", iconName: "devicon-react-plain", link:"https://reactjs.org/" },
        { name:"Next.js", iconName: "devicon-nextjs-plain", link:"https://nextjs.org/"  },
        { name:"Vue", iconName: "devicon-vuejs-plain", link:"https://vuejs.org/"  },
        { name:"Nuxt.js", iconName: "devicon-nuxtjs-plain", link:"https://nuxtjs.org/"  },
        { name:"HTML5", iconName: "devicon-html5-plain", link:"https://en.wikipedia.org/wiki/HTML5"  },
        { name: "CSS3", iconName: "devicon-css3-plain", link:"https://en.wikipedia.org/wiki/CSS"  },
        { name: "Bootstrap", iconName: "devicon-bootstrap-plain", link:"https://getbootstrap.com/" }
      ],
      backend : [
        { name:"Javascript", iconName: "devicon-javascript-plain", link:"https://www.javascript.com/"  },
        { name:"Typescript", iconName: "devicon-typescript-plain" , link:"https://www.typescriptlang.org/" },
        { name: "Node.js", iconName: "devicon-nodejs-plain" , link:"https://nodejs.org/" },
        { name: "Express", iconName: "devicon-express-plain" , link:"https://expressjs.com/" },
        { name: "MongoDB", iconName: "devicon-mongodb-plain" , link:"https://www.mongodb.com/" },
        { name: "Python", iconName: "devicon-python-plain" , link:"https://www.python.org/" },
        { name: "Django", iconName: "devicon-django-plain" , link:"https://www.djangoproject.com/" },
        {name:"MySQL", iconName: "devicon-mysql-plain" , link:"https://www.mysql.com/" },
      ],
      devops : [
        {name: "Linux", iconName: "devicon-linux-plain", link:"https://www.linux.org/" },
        {name: "Figma", iconName: "devicon-figma-plain", link:"https://www.figma.com/" },
        {name: "Firebase", iconName: "devicon-firebase-plain", link:"https://firebase.google.com/" },
        {name:"C++", iconName: "devicon-cpp-plain", link:"https://www.cplusplus.com/"  },
        {name:"git", iconName: "devicon-git-plain" , link:"https://git-scm.com/" },
        {name:"bash", iconName: "devicon-bash-plain" , link:"https://www.gnu.org/software/bash/" }
      ]
    };
  },
  methods: {
    colorful(id) {
      document.getElementById(id).classList.add("colored");
    },
    colorless(id) {
      document.getElementById(id).classList.remove("colored");
    },
  },
};
</script>

<style scoped>
._icons {
  font-size: 40px;
  transition: 500ms;
}
._icons:hover {
  font-size: 60px;
  transition: 500ms;
}
.techLinks, .techLinks:hover, .techLinks:visited, .techLinks:active {
  color: inherit;
  text-decoration: none
}
</style>