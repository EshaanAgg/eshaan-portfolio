<template>
  
  <div class="container animate__animated animate__fadeIn">
    <div class="row">
      <div class="col-md-6">
        
        <div class="about">
          <h1 class="line-after">About Me</h1>
          <h4 class="mt-4">Hey 👋</h4>
          <p>
            I'm <b>Eshaan Aggarwal</b>, a student, and developer from India. 🚀 
          </p>
          
          
          <div class="row animate__animated animate__fadeInUp">
            <div class = "col">
            
              <ul style="list-style-type: circle">
                <li> 💻 I am a Computer Science and Engineering undergraduate student at the Indian Institute of Technology BHU (Varanasi) pursuing a Bachelor of Technology in my second year. </li>
                <li> 🐱 I have a keen interest in Open Source and Web Development. </li>
                <li> 🌱 I’m currently learning Next.js and Django. </li>
                <li> ❓ Ask me about anything related to MEVN stack and related technologies.  </li>
                <li> 📫 Reach me at <a href="mailto: eshaanagg@gmail.com">eshaanagg@gmail.com</a>. </li>
                <li> 📄 Know about my experiences <a href="https://www.canva.com/design/DAFKZUTun1c/v9PVUxOj-KIEn7MPmg2jEg/view?utm_content=DAFKZUTun1c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">here</a>. </li>
                <li> ⚡ Fun fact: My favorite team name for Python competitions is `Indented Pun`.😚  </li>
              </ul>              
              
            </div>
          </div>
              
        </div>
      </div>
    </div>
      
    <div class="col-md-6">
      <img
          src="https://avatars.githubusercontent.com/u/96648934?s=400&u=388fcc11b4e68ab15dad030b529d5b0da8be0945&v=4"
          alt="Eshaan's Github Avatar Wallpaper"
          class="abt-img"
        />
    </div>
  
  </div>
</template>


<script>
export default {
  data() {
    return {
      startYear: 2021,
      currYear: new Date().getFullYear(),
      stacks: [
        {
          language: "HTML",
          experience: "3+ Years",
          variant: "secondary",
          breif: "lorem...",
        },
        {
          language: "CSS",
          experience: "3+ Years",
          variant: "primary",
          breif: "lorem...",
        },
        {
          language: "Javascript",
          experience: "2+ Years",
          variant: "warning",
          breif: "lorem...",
        },
        {
          language: "VUE.JS",
          experience: "2+ Years",
          variant: "success",
          breif: "lorem...",
        },
        {
          language: "Node.js",
          experience: "2+ Years",
          variant: "dark",
          breif: "lorem...",
        },
      ],
    };
  },
  head: {
    title: "About - Itsuka",
    meta: [
      {
        hid: "description",
        name: "description",
        // currYear - startYear
        content: `A Lightweight and Stable Discord Music Bot For Your Daily Production.`,
      },
    ],
  },
};
</script>

<style scoped>
.container {
  margin-top: 140px;
  text-align: left;
}
.line-after {
  overflow: hidden;
}
.line-after::after {
  content: "";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 100%;
  margin-right: -100%;
  margin-left: 10px;
  border-top: 2px solid rgb(211, 46, 46);
}
.abt-img {
  width: inherit;
  height: inherit;
  border-radius: 5px;
}

</style>