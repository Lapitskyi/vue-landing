<template>
  <div>
    <Form :reg="reg" />
  </div>
</template>

<script>
import Form from "./Form.vue";

export default {
  name: "login",
  components: {
    Form,
  },

  data() {
    return {
      reg: {
        isActive: true,
        title: "Вход в систему",
        btn: "Вход",
        span: "Запомнить меня",
        links: [
          { name: "Восстановление пароля", link: "/reset" },
          { name: "Регистрация нового пользователя", link: "/registration" },
        ],
        forms: [
          { items: { name: "mail", placeholder: "Почта" } },
          { items: { name: "pass", placeholder: "Пароль" } },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
</style>