<template>
  <div class="portfolio">
    <div class="container">
      <PortfolioItem :portfolio="portfolio" />
    </div>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem.vue";
export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
  },
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
            {
              id: "5",
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
        android: {
          title: "Android",
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
.portfolio {
  margin-top: 40px;
}
</style>