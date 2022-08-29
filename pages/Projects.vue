<template>
  <div
    class="about page animate__animated animate__fadeIn animate__delay-1s pt-4 pb-0 mb-0"
  >
    <h2>Recent Projects I Worked On</h2>
    <div class="row my-2 py-1 px-2 mx-2">
      <div
        class="col mt-1 mx-4 px-4 pt-5 pb-2 mb-2"
        v-for="(project, index) in projects"
        :key="index"
      >
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
