<template>
  <div>
    <Form :reg="reg" />
  </div>
</template>

<script>
import Form from "../../components/Form.vue";

export default {
  name: "reset",
  components: {
    Form,
  },
  data() {
    return {
      reg: {
        title: "Регистрация",
        btn: "Зарегистрироваться",
        links: [{ name: "Я уже зарегистрирован", link: "/login" }],
        forms: [
          { items: { name: "name", placeholder: "Полное имя" } },
          { items: { name: "mail", placeholder: "Почта" } },
          { items: { name: "pass", placeholder: "Пароль" } },
          { items: { name: "repass", placeholder: "Подтверждение пароля" } },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
</style>