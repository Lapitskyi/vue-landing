<template>
  <div class="contact">
    <div class="contact-inner">
      <h1 class="contact-title">Let's make something great together. </h1>
      <h2 class="contact-suptitle">Contact us or start a project, we’ll get back to you soon</h2>
      <div class="banner">
        <router-link class="banner-link" to="/">
          <div class="banner-logo"></div>
          Start a project
          <div class="arrow">
            <img src="" alt="">
          </div>
        </router-link>
      </div>
    </div>

    <div class="contact-info">
      <social/>
    </div>

  </div>
</template>

<script>
import Social from "@/components/Social";

export default {
  name: "Contact",
  components: {Social}
}
</script>

<style lang="scss" scoped>
.contact{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  //min-height: 100vh;


  &-inner{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 1.2;
    font-weight: 600;
  }
  &-title{
    font-size: 60px;
  }
  &-suptitle{
    font-size: 26px;
  }
  &-info{
    margin-top: auto;
    padding: 10px 0;
    align-items: flex-end;
  }
}
.banner {
  max-width: 350px;
  background-color: var(--bg-color);
  border-radius: 50px;
  border: 5px solid var(--bg-color);
  text-align: center;
  margin-top: 10%;

  &-logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--bg-intro-ligth);
  }

  &-link {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 0 10px;
    font-size: 20px;
    line-height: 1.2;
   white-space: nowrap;

    color: var(--text-white)
  }
}

</style>