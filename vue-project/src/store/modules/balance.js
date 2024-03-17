const name = "BALANCE";
const namespaced = true;
const state = {
  income: 0,
  outcome: 0,
  balance: 0,
};
const getters = {
  STATE: (state) => state,
};
const mutations = {
  SET_DIFFERENCE: (state) => {
    state.balance = state.income - state.outcome;
    localStorage.setItem(
      "balance",
      JSON.stringify({
        income: state.income,
        outcome: state.outcome,
        balance: state.balance,
      })
    );
  },
  SET_INCOME: (state, data) => {
    state.income = state.income + parseInt(data);
    localStorage.setItem(
      "balance",
      JSON.stringify({
        income: state.income,
        outcome: state.outcome,
        balance: state.balance,
      })
    );
  },
  SET_OUTCOME: (state, data) => {
    state.outcome = state.outcome + parseInt(data);
    localStorage.setItem(
      "balance",
      JSON.stringify({
        income: state.income,
        outcome: state.outcome,
        balance: state.balance,
      })
    );
  },
  DELETE_PROFIT: (state, data) => {
    state.balance = state.balance - parseInt(data);
    state.income = state.income - parseInt(data);
    localStorage.setItem(
      "balance",
      JSON.stringify({
        income: state.income,
        outcome: state.outcome,
        balance: state.balance,
      })
    );
  },
  DELETE_EXPENSE: (state, data) => {
    state.balance = state.balance + parseInt(data);
    state.outcome = state.outcome - parseInt(data);
    localStorage.setItem(
      "balance",
      JSON.stringify({
        income: state.income,
        outcome: state.outcome,
        balance: state.balance,
      })
    );
  },
  SET_FULL_BALANCE: (state, data) => {
    if (data) {
      state.income = data.income;
      state.outcome = data.outcome;
      state.balance = data.balance;
    }
  },
};
const actions = {
  SET_BALANCE: ({ commit }) => {
    commit("SET_DIFFERENCE");
  },
  SET_INCOME: ({ commit }, payload) => {
    commit("SET_INCOME", payload);
    commit("SET_DIFFERENCE");
  },
  SET_OUTCOME: ({ commit }, payload) => {
    commit("SET_OUTCOME", payload);
    commit("SET_DIFFERENCE");
  },
  DELETE_PROFIT: ({ commit }, payload) => {
    commit("DELETE_PROFIT", payload);
  },
  DELETE_EXPENSE: ({ commit }, payload) => {
    commit("DELETE_EXPENSE", payload);
  },
  GET_BALANCE: ({ commit }) => {
    const balance = JSON.parse(localStorage.getItem("balance")) || undefined;
    commit("SET_FULL_BALANCE", balance);
  },
};
export default {
  name,
  namespaced,
  state,
  getters,
  mutations,
  actions,
};