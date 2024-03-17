<script>
import initializeApp from "./mixin/initializeApp";
import BalanceActions from "./components/BalanceActions.vue";
import ProfitArticles from "./components/ProfitArticles.vue";
import ExpenseArticles from "./components/ExpenseArticles.vue";

export default {
  components: { BalanceActions, ProfitArticles, ExpenseArticles },
  mixins: [initializeApp],
  data: () => {
    return {};
  },
  mounted() {
    this.initApp();
  },
};
</script>

<template>
  <div class="container">
    <BalanceActions />
    <ProfitArticles />
    <ExpenseArticles />
  </div>
</template>

<style scoped>
.container {
  width: 1800px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0 0 0;
}
</style>