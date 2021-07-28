<template>
  <div class="logo">
    <router-link to="/">
      <img src="https://via.placeholder.com/100" alt="logo" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100px;
  overflow: hidden;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>