<template>
  <b-row style="margin-left: 0; margin-right: 0" class="pt-5 mt-5">
    <b-col md="4">
      <b-img
        src="https://avatars.githubusercontent.com/u/96648934?s=400&u=388fcc11b4e68ab15dad030b529d5b0da8be0945&v=4"
        alt="Eshaan's Github Avatar Wallpaper"
        id="avatar-img"
      />
    </b-col>

    <b-col md="8">
      <h2 class="intro animate__animated animate__fadeInUp animate__fast">
        Hi!,
        <br />I<span>'m Eshaan Aggarwal</span>.
      </h2>

      <div class="col-md-10 info">
        A <b>student</b> and <b>budding developer</b> from India 🇮🇳.
        <br />

        <b-button
          class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          to="/about"
        >
          Wanna hear about me? >
        </b-button>

        <b-button
          class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          to="/projects"
        >
          See what I am upto >
        </b-button>

        <!-- SOCIAL LINKS SECTION -->
        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <social-link :to="socialLinks.github">
            <GithubIcon />
          </social-link>

          <social-link :to="socialLinks.linkedin">
            <LinkedinIcon />
          </social-link>

          <social-link :to="socialLinks.mail">
            <MailIcon />
          </social-link>

          <social-link :to="socialLinks.twitter">
            <TwitterIcon />
          </social-link>

          <social-link :to="socialLinks.instagram">
            <InstagramIcon />
          </social-link>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";
import InstagramIcon from "vue-ionicons/dist/logo-instagram.vue";

import socialMediaLinks from "../assets/data/social";

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    MailIcon,
    InstagramIcon,
  },

  data() {
    return {
      avatar: require("@/assets/avatar.jpg"),
      socialLinks: socialMediaLinks,
    };
  },

  head: {
    title: "EshaanAgg | Portfolio",
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
