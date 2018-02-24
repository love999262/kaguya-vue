import Vue from 'vue';
import Vuex from 'vuex';

import searchengle from './modules/searchengle-list';
import websites from './modules/websites';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        searchengle,
        websites
    }
  });
