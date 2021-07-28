<template>
  <div class="container">
    <my-input
        v-model="text"
    />
  </div>
</template>

<script>
export default {
name: "home"
}
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid red;
}

.btn_img {
  border: 1px solid red;
  padding: 5px;
  position: relative;
  width: 20px;
  height: 20px;
}

.img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

}

.about {
  padding-top: 200px;
}


.about__title {
  font-family: "AdventPro-Bold", sans-serif;
  font-weight: 600;
  font-size: 28px;

  margin-bottom: 20px;

  span {
    font-size: 40px;
    margin-bottom: 10px;
    display: block;
    color: #00a4e5;
  }
}

.about__text {
  line-height: 1.5;
}

.test__btn {
  border: 1px solid red;
  padding: 12px 58px;
  font-size: 16px;
  color: #333;
}

@media (max-width: 992px) {
  .about {
    padding-top: 50px;
  }
  .about__title {
    font-size: 22px;

    span {
      font-size: 30px;
    }
  }
}
</style>