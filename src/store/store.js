import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    favoriteProjects: [],
  },
  mutations: {
    set: (state) => {
      console.log(state.favoriteProjects);
    },
  },
});

export default store;
