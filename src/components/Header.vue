<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <Logo/>

        <ul class="header__list" :class="{ active: isActive }">
          <li class="header__list-item" v-for="item in items" :key="item.title">
            <router-link class="header__list-link" :to="item.path">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import Logo from "@/components/Logo";

export default {
  name: "header",
  components: {Logo},
  data() {
    return {
      items: [
        {title: "Work", path: "/work"},
        {title: "About", path: "/about"},
        {title: "Teams", path: "/teams"},
        {title: "Blog", path: "/blog"},
        {title: "Contact", path: "/contact"},
      ],

      isActive: false,
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
  z-index: 50;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 50;
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
    z-index: 50;
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

@media (max-width: 768px) {
  .social__list {
    display: none;
  }
}
</style>