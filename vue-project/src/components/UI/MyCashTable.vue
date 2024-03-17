<script>
export default {
  name: "MyCashTable",
  props: {
    width: { type: String, required: true },
    background: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    color: { type: String, required: true },
  },
};
</script>

<template>
  <div class="table" :style="{ width: width, background: background }">
    <h3 :style="{ color: color }">{{ description }}:</h3>
    <h3 :style="{ color: color }">{{ price }} $</h3>
  </div>
</template>

<style scoped>
.table {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}
</style>