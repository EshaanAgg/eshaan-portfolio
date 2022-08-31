<template>
  <b-container class="page animate__animated animate__fadeIn">
    <b-row class="justify-content-center">
      <b-col cols="md-6">
        <h2>Get in touch 💌</h2>

        <p class="text-left">
          If you have any questions, or you just want to say "Hi", do reach out
          to me.
          <br />
          <br />
          <center>Here are my social links!</center>
        </p>

        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <SocialLink :to="socialLinks.github">
            <GithubIcon />
          </SocialLink>

          <SocialLink :to="socialLinks.linkedin">
            <LinkedinIcon />
          </SocialLink>

          <SocialLink :to="socialLinks.mail">
            <MailIcon />
          </SocialLink>

          <SocialLink :to="socialLinks.twitter">
            <TwitterIcon />
          </SocialLink>

          <SocialLink :to="socialLinks.instagram">
            <InstagramIcon />
          </SocialLink>
        </div>
      </b-col>
    </b-row>
    <b-row
      class="animate__animated animate__fadeInUp animate__delay-2s mt-1 pt-1"
      style="height: 500px"
      ><b-col>
        <ContactForm data-app class="mt-1 mb-3 pb-3" />
      </b-col>
    </b-row>
  </b-container>
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
      socialLinks: socialMediaLinks,
    };
  },

  head: {
    title: "EshaanAgg | Contact Me",
  },
};
</script>

<style scoped>
.container {
  margin-top: 120px;
}
form {
  margin-top: 40px;
  text-align: left;
}
</style>
