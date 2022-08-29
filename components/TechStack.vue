<template>
  <b-container class="mt-0 mb-4">
    <b-card class="container shadow-lg rounded teckstack">
      <center>
        <span class="font-weight-bold techstackCaption">
          <h3>Technologies I Love ❤️</h3></span
        >
      </center>

      <hr />
      <div class="row mt-0">
        <div class="col-md-4">
          <center>Frontend Dev</center>
          <hr />
          <TechGroup grpIdentifier="frontendTech" :technologies="frontend" />
        </div>

        <div class="col-md-4">
          <center>Backend Dev</center>
          <hr />
          <TechGroup grpIdentifier="backendTech" :technologies="backend" />
        </div>

        <div class="col-md-4">
          <center>DevOps</center>
          <hr />
          <TechGroup grpIdentifier="devOpsTech" :technologies="devops" />
        </div>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import tech from "../assets/data/tech";
export default {
  name: "TechStack",
  data() {
    return {
      frontend: [
        tech.React,
        tech.Next,
        tech.Vue,
        tech.Nuxt,
        tech.HTML,
        tech.CSS,
        tech.Bootstrap,
        tech.Tailwind,
      ],
      backend: [
        tech.JS,
        tech.TS,
        tech.Node,
        tech.Express,
        tech.MongoDB,
        tech.Python,
        tech.Django,
        tech.MySQL,
      ],
      devops: [
        tech.Linux,
        tech.Figma,
        tech.Firebase,
        tech.Cpp,
        tech.Git,
        tech.Bash,
      ],
    };
  },
};
</script>
