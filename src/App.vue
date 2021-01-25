
<template>
  <div id="wraper">
    <Header />
  </div>
  <!-- <router-view /> -->
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
// @import "./assets/scss/fonts.scss";

@import "./assets/scss/global.scss";
</style>
