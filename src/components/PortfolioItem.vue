<template>
  <div class="portfolio__inner" v-for="item of portfolio" :key="item">
    <h2 class="portfolio__title">{{ item.title }}</h2>

    <div class="portfolio__box">
      <div class="portfolio__item" v-for="data in item.data" :key="data">
        <div class="portfolio__photo">
          <img class="portfolio__img" :src="data.img" :alt="data.alt" />
        </div>
        <p class="portfolio__text">
          {{ data.text }}
        </p>
        <button class="portfolio__btn">Wiew</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      portfolio: {
        desing: {
          title: "Desing",
          data: [
            {
              id: "1",
              img: "https://via.placeholder.com/150",
              text: "Desing-text",
              alt: "Desing-photo",
            },
            {
              id: "2",
              img: "https://via.placeholder.com/150",
              text: "Desing-text",
              alt: "Desing-photo",
            },
            {
              id: "3",
              img: "https://via.placeholder.com/150",
              text: "Desing-text",
              alt: "Desing-photo",
            },
            {
              id: "4",
              img: "https://via.placeholder.com/150",
              text: "Desing-text",
              alt: "Desing-photo",
            },
          ],
        },
        web: {
          title: "Web",
          data: [
            {
              id: "1",
              img: "https://via.placeholder.com/150",
              text: "Web-text",
              alt: "Web-photo",
            },
            {
              id: "2",
              img: "https://via.placeholder.com/150",
              text: "Web-text",
              alt: "Web-photo",
            },
            {
              id: "3",
              img: "https://via.placeholder.com/150",
              text: "Web-text",
              alt: "Web-photo",
            },
            {
              id: "4",
              img: "https://via.placeholder.com/150",
              text: "Web-text",
              alt: "Web-photo",
            },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss">
.portfolio__title {
  font-size: 40px;
  margin-bottom: 20px;
}
.portfolio__inner + .portfolio__inner {
  margin-top: 50px;
}

.portfolio__box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  column-gap: 10px;
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
  font-size: 16px;
  padding: 12px 50px;
  color: #ffffff;
  background-color: #00a4e5;
}
</style>