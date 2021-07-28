<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-button",
  props: {
    btn: {
      type: [String, Object]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 50px;
  color: var(--text-white);
  background-color:var(--bg-intro-ligth);
  border: 1px solid var(--bg-intro-ligth);
  &:hover{
    background:var(--bg-white);
    color: var(--text-info-ligth);
  }
}


</style>