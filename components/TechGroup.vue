<template>
  <div class="img-content">
    <center>
      <a
        v-for="(svg, index) in technologies"
        :key="index"
        :href="svg.link"
        class="techLinks"
      >
        <i
          class="_icons m-2"
          :id="grpIdentifier + index"
          :key="index"
          v-on:mouseover="colorful(grpIdentifier + index)"
          v-on:mouseleave="colorless(grpIdentifier + index)"
          :class="svg.iconName"
          v-b-tooltip.hover
          :title="svg.name"
        />
      </a>
    </center>
  </div>
</template>

<script>
export default {
  name: "TechGroup",
  props: ["grpIdentifier", "technologies"],
  data() {
    return {};
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
.techLinks,
.techLinks:hover,
.techLinks:visited,
.techLinks:active {
  color: inherit;
  text-decoration: none;
}
</style>
