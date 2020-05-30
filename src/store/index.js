import Vue from 'vue';
import Vuex from 'vuex';

import appInformationModule from './appInformationModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appInformation: appInformationModule,
  },
});
