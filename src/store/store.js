import Vue from 'vue';
import Vuex from 'vuex';
import gitlab from './gitLab';
import eventBus from '../eventBus';

Vue.use(Vuex);

const dispatchFavoriteProjects = (projects) => {
  eventBus.$emit('favoriteProjects', projects);

  setTimeout(() => dispatchFavoriteProjects(projects), 60000);
};

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

      dispatchFavoriteProjects(projects);
    },
    set: (state, projects) => { // this.$store.commit('set', projects)
      state.favoriteProjects = projects;
    },
  },
});

export default store;
