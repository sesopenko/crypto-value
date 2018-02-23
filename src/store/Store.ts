import Vue from 'vue';
import Vuex from 'vuex';

import { remove, findIndex } from 'lodash';


import { IHolding, IStoreState } from '@/types';

import StoreLocalStorage from '@/store/StoreLocalStorage';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    StoreLocalStorage
  ],
  state: {
    holdings: [],
  },
  mutations: {
    setHolding(state: IStoreState, holding: IHolding) {
      const isZeroValue = (holding.value === 0);
      if (isZeroValue) {
        console.log('is zero');
        const holdingIndex = findIndex(state.holdings, (comparison: IHolding) => {
          return comparison.code === holding.code;
        })
        if (holdingIndex !== -1) {
          state.holdings.splice(holdingIndex, 1);
        }
      } else {
        const existingIndex = findIndex(state.holdings, ['code', holding.code]);
        console.log('existingIndex:', existingIndex);
        if (existingIndex === -1) {
          console.log('pushing');
          state.holdings.push(holding);
        } else {
          console.log('altering');
          state.holdings[existingIndex].value = holding.value;
        }
      }
    },
    setHoldings(state: IStoreState, holdings: Array<IHolding>) {
      state.holdings = holdings;
    }
  },
  actions: {
    addHolding({ commit }, holding: IHolding) {
      commit('setHolding', holding);
    }
  },
});
