<script>
export default {
  name: "MyArticle",
  props: {
    border: { type: String, required: true },
    colorBtn: { type: String, required: true },
    message: { type: String, required: true },
    sum: { type: Number, required: true },
    date: { type: String, required: true },
    background: { type: String, required: true },
    category: { type: String },
    id: { type: Number, required: true },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-inner">
      <h2>{{ message }} ~ {{ sum }} $</h2>
      <div v-if="category" class="category">
        <h3>{{ category }}</h3>
      </div>
      <h3>{{ date }}</h3>
    </div>
    <MyButton
      @click="$emit('delete-card', id, sum, category)"
      :background="background"
      :border="border"
      :color="colorBtn"
      >Delete</MyButton
    >
  </div>
</template>

<style scoped>
.card {
  width: 90%;
  padding: 15px;
  border-radius: 16px;
  border: 1px solid #000;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.card-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.category {
  background: white;
  padding: 5px 15px;
  border: 1px solid #844154;
  border-radius: 24px;
  text-align: center;
}
</style>