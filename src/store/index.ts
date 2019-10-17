import Vue from 'vue';
import RootState from './models/root-state';
import Vuex, { StoreOptions, MutationTree, ActionTree } from 'vuex';
import mutationName from './names/mutation-names';
import actionName from './names/action-names';
import { isNumber } from 'util';

Vue.use(Vuex);

const state: RootState = {
  counter: 0
};

const mutations: MutationTree<RootState> = {
  [mutationName.mainSetCounter](state: RootState, value: number) {
    state.counter = value;
  },
  [mutationName.increaseCounter](state: RootState, value: number) {
    if (isNumber(value)) {
      state.counter += value;

      return;
    }

    state.counter++;
  }
};

const actions: ActionTree<RootState, RootState> = {
  [actionName.mainSetCounter](context, value: number) {
    context.commit(actionName.mainSetCounter, value);
  }
};

const store: StoreOptions<RootState> = {
  modules: {
  },
  state,
  mutations,
  actions
};

export default new Vuex.Store(store);
