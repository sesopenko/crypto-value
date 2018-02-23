import Vue from 'vue';
import Vuex from 'vuex';

import { IHolding, IStoreState } from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    holdings: [],
  },
  mutations: {
    addHolding(state: IStoreState, holding: IHolding) {
      state.holdings.push({
        code: holding.code.toUpperCase(),
        value: holding.value
      });
    }
  },
  actions: {
    addHolding({ commit }, holding: IHolding) {
      commit('addHolding', holding);
    }
  },
});
