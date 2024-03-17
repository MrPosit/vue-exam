<script>
export default {
  name: "MyInput",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "text",
    },
  },
};
</script>

<template>
  <input
    class="input"
    :type="type"
    :value="value"
    min="0"
    @input="$emit('change-value', $event.target.value)"
    :placeholder="placeholder"
  />
</template>

<style scoped>
.input {
  border-radius: 8px;
  border: none;
  width: 350px;
  padding: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 19px;
}
</style>