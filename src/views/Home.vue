<template>
  <div>
    <div class="about">
      <div class="about__inner">
        <h1 class="about__title">
          <span>Lorem </span>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          temporibus!
        </h1>

        <div class="about__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea
            cupiditate sapiente saepe architecto vitae eius odit est, sed vel
            voluptatem voluptatibus pariatur perferendis reprehenderit a hic
            delectus consequatur? Reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            perspiciatis doloribus veniam ut sequi! Quos, eaque illum officiis
            natus debitis autem iste, veniam ut, praesentium recusandae iure
            esse deserunt amet.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
            eveniet!
          </p>
        </div>
      </div>

      <router-link :to="href" class="test__btn btn">Click</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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