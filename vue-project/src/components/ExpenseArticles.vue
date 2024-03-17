<script>
import initializeApp from "../mixin/initializeApp";

export default {
  mixins: [initializeApp],
  methods: {
    deleteCard(id, sum, name) {
      this.deleteExpense(sum, id, name);
    },
  },
};
</script>

<template>
  <div class="expense-block">
    <h2>EXPENSE ARTICLES:</h2>
    <div class="expenses">
      <MyArticle
        v-for="article in STATE_RECORDS.expenses"
        :key="article.id"
        :border="'3px solid #844154'"
        :colorBtn="'white'"
        :sum="parseInt(article.sum)"
        :date="article.date"
        :message="article.message"
        :background="'#BC5D78'"
        :category="article.category"
        :id="parseInt(article.id)"
        @delete-card="deleteCard"
      />
    </div>
    <MyCashTable
      :width="'100%'"
      :background="'#BC5D78'"
      :description="'TOTAL EXPENSE AMOUNT'"
      :price="STATE_RECORDS.totalExpense"
      :color="'white'"
    />
  </div>
</template>

<style scoped>
.expense-block {
  width: 550px;
  height: 500px;
  border-radius: 24px;
  background: #e3e3e3;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.expense-block h2 {
  font-weight: bold;
  color: #bc5d78;
}

.expenses {
  width: 100%;
  height: 350px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
}
</style>