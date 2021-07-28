
<template>
  <div id="wrapper">
    <Header />
  </div>
  <div class="container">
    <router-view></router-view>
  </div>

</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>



<style lang="scss">
@import "./assets/scss/null.scss";
@import "./assets/scss/vars.scss";
// @import "./assets/scss/fonts.scss";

@import "./assets/scss/global.scss";
</style>
