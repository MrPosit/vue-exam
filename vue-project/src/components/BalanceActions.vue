<script>
import initializeApp from "../mixin/initializeApp";

export default {
  mixins: [initializeApp],
  data: () => {
    return {
      profitModal: false,
      expenseModal: false,
      categoriesModal: false,
      profitMessage: "",
      profitSum: "",
      expenseMessage: "",
      expenseSum: "",
      expenseCategory: "",
      categoryName: "",
    };
  },
  methods: {
    showProfitModal() {
      this.profitModal = !this.profitModal;
    },
    showExpenseModal() {
      this.expenseModal = !this.expenseModal;
    },
    showCategoriesModal() {
      this.categoriesModal = !this.categoriesModal;
    },
    addProfit() {
      if (this.profitMessage && this.profitSum) {
        this.addNewProfit(this.profitSum);
        this.pushProfits({
          message: this.profitMessage,
          sum: this.profitSum,
        });
        this.profitMessage = "";
        this.profitSum = "";
        this.profitModal = !this.profitModal;
      }
    },
    addExpense() {
      if (this.expenseMessage && this.expenseSum && this.expenseCategory) {
        this.addNewExpense(this.expenseSum);
        this.pushExpenses({
          message: this.expenseMessage,
          sum: this.expenseSum,
          category: this.expenseCategory,
        });
        this.changeCategoryData({
          name: this.expenseCategory,
          expense: this.expenseSum,
        });
        this.expenseMessage = "";
        this.expenseSum = "";
        this.expenseCategory = "";
        this.expenseModal = !this.expenseModal;
      }
    },
    addCategory() {
      if (this.categoryName) {
        this.addNewCategory(this.categoryName);
        this.categoryName = "";
        this.categoriesModal = !this.categoriesModal;
      }
    },
    changeCategory(event) {
      this.expenseCategory = event;
    },
  },
};
</script>

<template>
  <div class="balance-block">
    <div class="cash-sum">
      <h3>Balance:</h3>
      <h1>{{ STATE_BALANCE.balance }} $</h1>
    </div>
    <div class="space-evenly">
      <MyButton
        :width="'200px'"
        :background="'#55885D'"
        :border="'3px solid #3C5F41'"
        :color="'white'"
        @click="showProfitModal"
        >Add profit</MyButton
      >
      <MyModal :show="profitModal" :change-show="showProfitModal">
        <MyInput
          :type="'text'"
          :placeholder="'Write your message about profit...'"
          :value="profitMessage"
          @change-value="(v) => (profitMessage = v)"
        />
        <MyInput
          :type="'number'"
          :placeholder="'Write your profit...'"
          :value="profitSum"
          @change-value="(v) => (profitSum = v)"
        />
        <MyButton
          :width="'120px'"
          :background="'#55885D'"
          :border="'3px solid #3C5F41'"
          :color="'white'"
          @click="addProfit"
          >Add profit</MyButton
        >
      </MyModal>
      <!-- ---------------------------------------------- -->
      <MyButton
        :width="'200px'"
        :background="'#BC5D78'"
        :border="'3px solid #844154'"
        :color="'white'"
        @click="showExpenseModal"
        >Add expense</MyButton
      >
      <MyModal :show="expenseModal" :change-show="showExpenseModal">
        <MyInput
          :type="'text'"
          :placeholder="'Write your message about expense...'"
          :value="expenseMessage"
          @change-value="(v) => (expenseMessage = v)"
        />
        <MyInput
          :type="'number'"
          :placeholder="'Write your expense...'"
          :value="expenseSum"
          @change-value="(v) => (expenseSum = v)"
        />
        <select
          :value="expenseCategory"
          @change="(event) => changeCategory(event.target.value)"
          class="select"
        >
          <option disabled value="" selected>Select from the list</option>
          <option
            v-for="(option, key) in STATE_CATEGORIES.allCategories"
            :key="key"
            :value="option.name"
          >
            {{ option.name }}
          </option>
        </select>
        <MyButton
          :width="'120px'"
          :background="'#BC5D78'"
          :border="'3px solid #844154'"
          :color="'white'"
          @click="addExpense"
          >Add profit</MyButton
        >
      </MyModal>
    </div>
    <div class="space-between">
      <MyCashTable
        :width="'265px'"
        :background="'#55885D'"
        :description="'MAX PROFIT'"
        :price="parseInt(STATE_RECORDS.maxProfit)"
        :color="'white'"
      />
      <MyCashTable
        :width="'265px'"
        :background="'#BC5D78'"
        :description="'MAX EXPENSE'"
        :price="parseInt(STATE_RECORDS.maxExpense)"
        :color="'white'"
      />
    </div>
    <MyButton
      :width="'100%'"
      :background="'white'"
      :border="'none'"
      :color="'black'"
      @click="showCategoriesModal"
    >
      +
    </MyButton>
    <MyModal :show="categoriesModal" :change-show="showCategoriesModal">
      <MyInput
        :type="'text'"
        :placeholder="'Write category name...'"
        :value="categoryName"
        @change-value="(v) => (categoryName = v)"
      />
      <MyButton
        :width="'120px'"
        :background="'#BC5D78'"
        :border="'3px solid #844154'"
        :color="'white'"
        @click="addCategory"
        >Add category</MyButton
      >
    </MyModal>
    <div class="categories">
      <MyCashTable
        v-for="(option, key) in STATE_CATEGORIES.allCategories"
        :key="key"
        :width="'100%'"
        :background="'white'"
        :description="option.name"
        :price="option.expense"
        :color="'black'"
      />
    </div>
  </div>
</template>

<style scoped>
.balance-block {
  width: 600px;
  height: 750px;
  border-radius: 24px;
  background: #e3e3e3;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cash-sum {
  width: 100%;
  height: 150px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.cash-sum h1 {
  color: green;
  font-weight: bold;
}

.cash-sum h3 {
  font-weight: bold;
}

.space-evenly {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.space-between {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.categories {
  width: 100%;
  height: 300px;
}

.select {
  border-radius: 8px;
  border: none;
  width: 350px;
  padding: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 19px;
}

.categories {
  overflow: auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 20px;
}
</style>