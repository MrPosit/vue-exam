import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      STATE_CATEGORIES: "CATEGORIES/STATE",
      STATE_BALANCE: "BALANCE/STATE",
      STATE_RECORDS: "RECORDS/STATE",
    }),
  },
  methods: {
    ...mapActions({
      SET_BALANCE: "BALANCE/SET_BALANCE",
      SET_INCOME: "BALANCE/SET_INCOME",
      SET_OUTCOME: "BALANCE/SET_OUTCOME",
      CREATE_CATEGORY: "CATEGORIES/CREATE_CATEGORY",
      SET_PROFITS: "RECORDS/SET_PROFITS",
      SET_EXPENSES: "RECORDS/SET_EXPENSES",
      CHANGE_CATEGORY: "CATEGORIES/CHANGE_CATEGORY",
      DELETE_PROFIT: "BALANCE/DELETE_PROFIT",
      DELETE_PROFIT_FROM_LIST: "RECORDS/DELETE_PROFIT_FROM_LIST",
      DELETE_EXPENSE: "BALANCE/DELETE_EXPENSE",
      DELETE_EXPENSE_FROM_LIST: "RECORDS/DELETE_EXPENSE_FROM_LIST",
      DELETE_CATEGORY_EXPENSE: "CATEGORIES/DELETE_CATEGORY_EXPENSE",
      GET_BALANCE: "BALANCE/GET_BALANCE",
      GET_CATEGORIES: "CATEGORIES/GET_CATEGORIES",
      GET_RECORDS: "RECORDS/GET_RECORDS",
    }),
    updateBalance() {
      this.SET_BALANCE();
    },
    addNewCategory(name) {
      this.CREATE_CATEGORY(name);
    },
    addNewProfit(sum) {
      this.SET_INCOME(sum);
    },
    addNewExpense(sum) {
      this.SET_OUTCOME(sum);
    },
    pushProfits(data) {
      this.SET_PROFITS(data);
    },
    pushExpenses(data) {
      this.SET_EXPENSES(data);
    },
    changeCategoryData(data) {
      this.CHANGE_CATEGORY(data);
    },
    deleteProfit(sum, id) {
      this.DELETE_PROFIT(sum);
      this.DELETE_PROFIT_FROM_LIST(id);
    },
    deleteExpense(sum, id, name) {
      this.DELETE_EXPENSE(sum);
      this.DELETE_EXPENSE_FROM_LIST(id);
      this.DELETE_CATEGORY_EXPENSE({ name: name, expense: sum });
    },
    initApp() {
      this.GET_BALANCE();
      this.GET_CATEGORIES();
      this.GET_RECORDS();
    },
  },
};