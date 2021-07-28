<template>
          <ul class="social__list">
            <li
                class="social__list-item"
                v-for="item in socials"
                :key="item.icon"
            >
              <a
                  class="social__list-link"
                  :href="item.link"
                  :aria-label="item.label"
              >
                <img class="social__list-icon" :src="item.icon" :alt="item.alt"/>
              </a>
            </li>
          </ul>
</template>

<script>
export default {
  name: "Social",
  data(){
    return{
      socials: [
        {
          icon:
              "https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-256.png",
          link: "https://www.instagram.com/",
          label: "instagram",
          alt: "logo_instagram",
        },
        {
          icon:
              "https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-256.png",
          link: "https://www.linkedin.com/",
          label: "linkedin",
          alt: "logo_linkedin",
        },
        {
          icon:
              "https://cdn2.iconfinder.com/data/icons/picons-social/57/79-upwork-2-256.png",
          link: "https://www.upwork.com/",
          label: "upwork",
          alt: "logo_upwork",
        },
        {
          icon:
              "https://cdn3.iconfinder.com/data/icons/glypho-free/64/phone-outline-256.png",
          link: "tel:+8050000000",
          label: "tel",
          alt: "logo_tel",
        },
        {
          icon:
              "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-02-256.png",
          link: "mailto:mail.gmail.com",
          label: "mail",
          alt: "mail",
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.social__list {
  display: flex;
}

.social__list-item + .social__list-item {
  margin-left: 25px;
}

.social__list-item {
}

.social__list-link {
  display: block;
  width: 40px;
  height: 40px;
  border: solid 1px #999;
  border-radius: 8px;
  background-color: transparent;
  position: relative;
  z-index: 50;

&:hover {
   border-color: #00a4e5;
   background-color: #00a4e5;

.contact__list-icon {
  fill: #999;
}
}
}

.social__list-icon {
  width: 25px;
  height: 25px;
  fill: #999;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>