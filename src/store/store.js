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
      console.log('init');
      const projectsIds = JSON.parse(localStorage.getItem('gitlab-dashboard.project-ids'));
      const projects = [];

      if (projectsIds !== null) {
        for (let i = 0; i < projectsIds.length; i += 1) {
          console.log(`getting project ${projectsIds[i]}`);
          projects.push(await gitlab.getProject(projectsIds[i]));
          console.log(`got project ${projectsIds[i]}`);
        }
      }

      state.favoriteProjects = projects;
      console.log('/init');
      eventBus.$emit('projectsOk', projects);
    },
    set: (state, projects) => { // this.$store.commit('set', projects)
      state.favoriteProjects = projects;
    },
  },
});

export default store;
