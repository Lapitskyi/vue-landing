<template>
  <div class="header">
    <div class="container">
      <div class="inner">
        <img
          src="https://w7.pngwing.com/pngs/70/60/png-transparent-vue-js-javascript-library-github-github-angle-text-triangle.png"
          alt="logo"
        />

        <ul>
          <li v-for="item in items" :key="item.title">
            <router-link to="{{item.path}}"> {{ item.title }} </router-link>
          </li>
        </ul>
      </div>
      <!-- <router-view /> -->
    </div>
  </div>
</template>


<script>
export default {
  name: "header",
  data() {
    return {
      items: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Login", path: "/login" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
img {
  max-width: 100px;
  height: auto;
  overflow: hidden;
}
ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}
li + li {
  margin-left: 25px;
}
li {
}
</style>