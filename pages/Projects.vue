<template>
  <div class="pt-4 pb-0 mb-0 intro animate__animated animate__fadeInUp animate__fast">
    <div class="row">

    <div class="col-12 my-2 py-1 px-2 mx-2">
      <h2>
        <center> Recent Projects I Worked On </center>
      </h2>
    </div>

      <div class="col-4 mx-0.75 px-1" v-for="(project, index) in projects" :key="'projectItem' + index">
        <ProjectItem :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import projs from "../assets/data/projects";

export default {
  data() {
    return {
      projects: projs
    };
  },
  head: {
    title: "EshaanAgg | Projects",
  },
};
</script>
