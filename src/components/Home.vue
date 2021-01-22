<template>
  <div>
    <div class="about">
      <div class="about__inner">
        <h1 class="about__title">
          <span>256Devs </span>

          Web and Mobile development (iOS & Android) | Back-end | Design
        </h1>

        <div class="about__text">
          <p>
            Overview 256Devs is a professional software development company -
            iOS/Android/Web/Desktop specialized. More than 4+ years of
            experience. Our strongest fields are native mobile app development
            and backend. * We are not only coding - we do listen to all ideas
            and bring ours to create a truly unique and special website/mobile
            app for your business startup, or e-commerce niche, or a social
            network. * We are open and honest with our clients and employers. *
            We always try to follow fair-play, and our clients value such an
            approach. * An accurate and proper planning is important, but we are
            also flexible to discuss your concept and suggest what we believe
            may improve your business ideas. If you need high-quality apps -
            choose us!
          </p>
          <p>If you need high-quality apps - choose us!</p>
        </div>
      </div>
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

.about__inner {
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