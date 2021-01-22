
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
/*Обнуление*/

*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  border: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 0;
}

p {
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 10px 0;
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
