<template>
  <div class="login">
    <div class="container">
      <div class="login__inner">
        <h3 class="login__title">Вход в систему</h3>

        <form class="form" action="/">
          <label>
            <input class="form__input" type="text" placeholder="Почта" />
          </label>
          <label>
            <input class="form__input" type="text" placeholder="Пароль" />
          </label>
          <label class="form__label-checkbox">
            <input
              class="form__checkbox"
              name="input-checkbox"
              type="checkbox"
              id="input-checkbox"
            />
            <span class="form__check-style"></span>
            Запомнить меня
          </label>
          <button class="form__btn btn" type="submit">Вход</button>
        </form>

        <a class="login__btn btn" href="#"> Востановление пароля</a>
        <a class="login__btn btn" href="#"> Регистрация нового пользователя</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login {
  padding-top: 100px;
  height: 100vh;
}

.login__inner {
  box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5),
    1px 1px 5px rgba(255, 255, 255, 1);

  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
}
.login__title {
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
  border: 1px solid #000000;

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
  padding-left: 40px;
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
  width: 20px;
  height: 20px;
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

.login__btn {
  color: #000000;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
    color: #00a4e5;
  }
}

.login__btn + .login__btn {
  margin-top: 10px;
}
</style>