
<script>
import initializeApp from "../mixin/initializeApp";

export default {
  mixins: [initializeApp],
  methods: {
    deleteCard(id, sum) {
      this.deleteProfit(sum, id);
    },
  },
};
</script>

<template>
  <div class="profit-block">
    <h2>PROFITS ARTICLES:</h2>
    <div class="profits">
      <MyArticle
        v-for="article in STATE_RECORDS.profits"
        :key="article.id"
        :border="'3px solid #3C5F41'"
        :colorBtn="'white'"
        :sum="parseInt(article.sum)"
        :date="article.date"
        :message="article.message"
        :background="'#55885D'"
        :id="parseInt(article.id)"
        @delete-card="deleteCard"
      />
    </div>
    <MyCashTable
      :width="'100%'"
      :background="'#55885D'"
      :description="'TOTAL PROFIT AMOUNT'"
      :price="STATE_RECORDS.totalProfit"
      :color="'white'"
    />
  </div>
</template>

<style scoped>
.profit-block {
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

.profit-block h2 {
  font-weight: bold;
  color: green;
}

.profits {
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
