export default {
  target: "static",
  
  head: {
    title: 'eshaan-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          "https://avatars.githubusercontent.com/u/96648934?v=4"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      },
      {
        rel:"stylesheet",
        href:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      }
    ]
  },

  css: ["@assets/css/style.css"],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    'bootstrap-vue/nuxt',
  ],
  build: {}
}
