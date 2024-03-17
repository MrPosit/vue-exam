<script>
export default {
  name: "MyButton",
  props: {
    width: { type: String },
    border: { type: String, required: true },
    background: { type: String, required: true },
    color: { type: String, required: true },
  },
};
</script>

<template>
  <button
    class="button"
    :style="{
      width: width,
      border: border,
      background: background,
      color: color,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  font-size: 19px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>