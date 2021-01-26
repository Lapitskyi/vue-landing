<template>
  <div class="inner">
    <h3 class="title">{{ reg.title }}</h3>

    <form class="form">
      <label v-for="item in reg.forms" :key="item.items.name">
        <input
          class="form__input"
          type="text"
          :placeholder="item.items.placeholder"
        />
      </label>

      <label class="form__label-checkbox" :class="{ active: reg.isActive }">
        <input
          class="form__checkbox"
          :name="reg.span"
          type="checkbox"
          :id="reg.span"
        />
        <span class="form__check-style"></span>
        {{ reg.span }}
      </label>

      <button class="form__btn btn" type="submit">{{ reg.btn }}</button>
    </form>

    <router-link
      class="link__btn btn"
      v-for="link in reg.links"
      :key="link.name"
      :to="link.link"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Form",
  // props: { reg: null },
  props: ["reg"],
};
</script>

<style lang="scss" scoped>
.inner {
  box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5),
    2px 2px 5px rgba(154, 147, 140, 0.5);

  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
}
.title {
  text-align: center;
  font-size: 18px;
}

.form {
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.form__input {
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: 1px solid rgba(#000000, 0.3);

  &:focus {
    outline: none;
    border-color: #00a4e5;
  }
}
label + label {
  margin-top: 20px;
}

// .form__checkbox
.form__label-checkbox {
  display: none;
  padding-left: 30px;
}

.form__label-checkbox.active {
  display: block;
}

.form__checkbox {
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
}

.form__check-style {
  position: absolute;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(#000000, 0.7);

  left: 5px;
}

.form__checkbox:checked + .form__check-style::before {
  content: "";
  width: 10px;
  height: 10px;
  background-color: #00a4e5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form__checkbox:checked + .form__check-style {
  border-color: #00a4e5;
}

.form__checkbox:disabled + .form__check-style {
  border-color: rgba(#000000, 0.7);
}

.form__checkbox:checked:disabled + .form__check-style::before {
  background-color: rgba(#000000, 0.7);
}

.form__checkbox:focus + .form__check-style {
  box-shadow: 0 0 0 1px #00a4e5;
}

.form__btn {
  margin: 0 auto;
  margin-top: 30px;
  background-color: #00a4e5;
  color: #ffffff;
  font-size: 16px;
  padding: 12px 30px;
}

.link__btn {
  color: #000000;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
    color: #00a4e5;
  }
}

.link__btn + .link__btn {
  margin-top: 10px;
}
</style>