<template>
  <div class="portfolio__inner" v-for="item of portfolio" :key="item">
    <h2 class="portfolio__title">{{ item.title }}</h2>

    <swiper
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="portfolio__item"
        v-for="data in item.data"
        :key="data.id"
      >
        <div class="portfolio__photo">
          <img class="portfolio__img" :src="data.img" :alt="data.alt" />
        </div>
        <p class="portfolio__text">
          {{ data.text }}
        </p>
        <button class="portfolio__btn">Wiew</button>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);
export default {
  name: "Portfolio",
  props: ["portfolio"],
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss" >
@import "swiper/swiper.scss";
@import "swiper/components/navigation/navigation.scss";
@import "swiper/components/pagination/pagination.scss";
@import "swiper/components/scrollbar/scrollbar.scss";

.portfolio__title {
  font-size: 40px;
  margin-bottom: 20px;
}

.portfolio__inner {
}
.portfolio__inner + .portfolio__inner {
  margin-top: 50px;
}

.swiper-wrapper {
  padding-bottom: 50px;
}

.swiper-pagination {
  bottom: 15px !important;
}
.swiper-button-prev,
.swiper-button-next {
  top: 30%;
}

.portfolio__item {
}
.portfolio__photo {
  overflow: hidden;
  padding: 0 0 58% 0;
  position: relative;
}
.portfolio__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
.portfolio__text {
}
.portfolio__btn {
  display: block;
  font-size: 16px;
  padding: 12px 50px;
  color: #ffffff;
  background-color: #00a4e5;
  margin: 20px auto;
}
</style>