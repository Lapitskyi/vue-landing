<template>
  <div id="wraper">
    <Header />
  </div>
  <!-- <router-view /> -->
</template>

<script>
// import Header from "@/components/Header.vue";

import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>



<style lang="scss">
body {
  color: #000000;
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
a {
  text-decoration: none;
  color: #000000;
}
</style>
