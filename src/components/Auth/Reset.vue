<template>
  <div>
    <Form :reg="reg" />
  </div>
</template>

<script>
import Form from "./Form.vue";

export default {
  name: "reset",
  components: {
    Form,
  },
  data() {
    return {
      reg: {
        links: [{ name: "Вспомнили?", link: "/login" }],
        title: "Востановление пароля",
        btn: "Отправить для востановления пароля",
        forms: [{ items: { name: "name", placeholder: "Почта" } }],
      },
    };
  },
};
</script>

<style lang="scss">
</style>