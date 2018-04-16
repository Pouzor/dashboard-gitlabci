import Vue from 'vue';
import Vuex from 'vuex';
import gitlab from './gitLab';
import eventBus from '../eventBus';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    favoriteProjects: [],
  },
  getters: {
    favoriteProjects: state => state.favoriteProjects,
  },
  mutations: {
    init: async (state) => {
      const projectsIds = JSON.parse(localStorage.getItem('gitlab-dashboard.project-ids'));
      const projects = [];

      if (projectsIds !== null) {
        for (let i = 0; i < projectsIds.length; i += 1) {
          projects.push(await gitlab.getProject(projectsIds[i]));
        }
      }

      state.favoriteProjects = projects;
      eventBus.$emit('favoriteProjects', projects);
    },
    set: (state, projects) => { // this.$store.commit('set', projects)
      state.favoriteProjects = projects;
    },
  },
});

export default store;
