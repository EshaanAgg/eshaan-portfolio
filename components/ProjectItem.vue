<template>
  <b-card class="mt-3 mb-3">
    <a :href="project.link">
      <img
        :src="project.image_cover"
        :alt="project.title"
        class="project-cover"
      />
    </a>

    <h2 class="mt-3" style="text-align: center">
      {{ project.title }}
      <hr class="dope" />
      <hr class="dope" />
    </h2>

    <b-card class="mt-3 mb-3 text-left text-dark">
      <p>{{ project.description }}</p>
      
      <center>
      <b-link :href="project.link">
        {{ getRandomLinkText() }}
      </b-link>
      <LinkIcon/>

      <hr />
      Built with {{ getRandomBuiltWith() }} using
      <TechGroup :grpIdentifier="'projectTech' + project.title" :technologies="project.tech" class="my-1"/>
      <b-link :href="project.github_url">
        {{ getRandomGithubText() }} 
      </b-link>
      <GithubIcon />
      </center>
    </b-card>
  
  </b-card>
</template>

<script>
import LinkIcon from "vue-ionicons/dist/md-link.vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";

export default {
  components: {
    LinkIcon,
    GithubIcon,
  },
  data() {
    return {};
  },
  props: ["project"],
  methods: {
    getRandom(items){
      return items[Math.floor(Math.random()*items.length)];
    },
    getRandomBuiltWith(){
      const emojis = ['❤️', '☕', '🍕' , '🖥️' , '🍀', '💤', '🌭', '🥪', '🎉'];
      return this.getRandom(emojis);
    },
    getRandomLinkText(){
      const arr = ['View it on WWW!', 'See it in action!', 'Hosted here!' , 'Visit it!' , 'Deployed here!', 'View me!', 'See me!'];
      return this.getRandom(arr);
    },
    getRandomGithubText(){
      const arr = ['Source code', 'May the source be with you!', 'Detailed stack here' , 'Code for nerds' , 'Hosted on Github here', 'View my repo!'];
      return this.getRandom(arr);
    }
  }
};
</script>

<style scoped>
.row {
  margin-top: 70px;
}
.project-cover {
  width: inherit;
  border-radius: 3px;
}
hr.dope {
  border: 0;
  border-top: 2px solid #dc3545;
  text-align: center;
  margin: initial;
  margin-bottom: 0.2px;
  margin-left: 5px;
}
</style>
