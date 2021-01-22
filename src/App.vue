
<template>
  <div id="wraper">
    <Header />
  </div>
  <!-- <router-view /> -->
</template>

<script>
import Header from "./components/Header.vue";
// import fonts from "@/scss/font.scss";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>



<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 10px 0;
}

a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

a:focus,
a:active {
  outline: none;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: "AdventPro-Regular", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: normal;
  line-height: 1.2;
  color: #000000;
  background: #ffffff;
  scroll-behavior: smooth;
  min-width: 320px;
  overflow-x: hidden;
}
.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}
.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 15px;
}

.btn {
  display: block;
  border: none;
  box-shadow: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-size: 0;
  background: transparent;
  color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>
