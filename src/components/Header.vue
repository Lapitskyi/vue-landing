<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <img
            src="https://odesk-prod-portraits.s3.amazonaws.com/Companies:4725442:CompanyLogoURL?AWSAccessKeyId=AKIAIKIUKM3HBSWUGCNQ&Expires=2147483647&Signature=PoqAdyOy3ouPqYLASItWAAD1qNA%3D"
            alt="logo"
          />
        </div>

        <ul class="header__list" :class="{ active: isActive }">
          <li class="header__list-item" v-for="item in items" :key="item.title">
            <router-link class="header__list-link" :to="item.path">
              {{ item.title }}
            </router-link>
          </li>
        </ul>

        <ul class="social__list">
          <li
            class="social__list-item"
            v-for="item in socials"
            :key="item.icon"
          >
            <a class="social__list-link" :href="item.link">
              <img class="social__list-icon" :src="item.icon" alt="" />
            </a>
          </li>
        </ul>

        <button class="header__btn" :class="{ active: isActive }">
          <span class="header__btn-line"></span>
        </button>
      </div>
      <router-view />
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
        { title: "Order", path: "/order" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Login", path: "/login" },
        { title: "Registration", path: "/registration" },
      ],
      socials: [
        {
          icon:
            "https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-256.png",
          link: "https://www.instagram.com/",
        },
        {
          icon:
            "https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-256.png",
          link: "https://www.linkedin.com/",
        },
        {
          icon:
            "https://cdn2.iconfinder.com/data/icons/picons-social/57/79-upwork-2-256.png",
          link: "https://www.upwork.com/",
        },
        {
          icon:
            "https://cdn3.iconfinder.com/data/icons/glypho-free/64/phone-outline-256.png",
          link: "tel:+8050000000",
        },
        {
          icon:
            "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-02-256.png",
          link: "mailto:mail.gmail.com",
        },
      ],

      // isActive: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
}
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.header__logo {
  width: 100px;
  overflow: hidden;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}

.header__list {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}
.header__list-item + .header__list-item {
  margin-left: 50px;
}
.header__list-item {
}

.header__list-link {
  color: #999;
  &:hover {
    color: #00a4e5;
  }
}

.header__btn {
  display: none;
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 50;
}

.header__btn-line {
  display: block;
  width: 50px;
  height: 4px;
  background: #00a4e5;

  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00a4e5;
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
  }

  &::before {
    top: -15px;
  }

  &::after {
    top: 15px;
  }
}

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
  width: 50px;
  height: 50px;
  border: solid 1px #999;
  background-color: transparent;
  position: relative;

  &:hover {
    border-color: #00a4e5;
    .contact__list-icon {
      fill: #00a4e5;
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

@media (max-width: 992px) {
  .header__list {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    transition: all 0.6s ease 0s;
    background: #333;
    text-align: center;
    padding: 100px 10px 20px 10px;
  }

  .header__list.active {
    top: 0;
  }

  .header__list {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .header__list-item + .header__list-item {
    margin-left: 0;
  }
  .header__list-item {
    margin: 40px 0;
  }
  .header__list-link {
    font-size: 25px;
    line-height: 30px;
  }

  .header__btn {
    display: block;
  }
  .header__btn-line.active {
    background: transparent;

    &::after {
      top: 0;
      transform: rotate(45deg);
      transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
      background: #00a4e5;
    }

    &::before {
      top: 0;
      transform: rotate(-45deg);
      transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
      background: #00a4e5;
    }
  }

  // button.active {
  //   position: fixed;
  //   top: 15px;
  //   right: 15px;
  //   z-index: 50;
  //   transition: fixed 0.2s linear;
  // }
}
</style>