import { EventEmitter } from 'events';
import gitlab from './gitLab';

const store = new EventEmitter();

export default store;

store.getFavoriteProjects = async () => {
  const projectsIds = JSON.parse(localStorage.getItem('gitlab-dashboard.project-ids'));
  const projects = [];

  for (let i = 0; i < projectsIds.length; i += 1) {
    projects.push(await gitlab.getProject(projectsIds[i]));
  }

  return projects;
};

store.getFavoriteProjectIds = () => JSON.parse(localStorage.getItem('gitlab-dashboard.project-ids'));

store.addFavoriteProject = (id, project = null) => {
  const projectIds = JSON.parse(localStorage.getItem('gitlab-dashboard.project-ids'));

  projectIds.push(id);

  localStorage.setItem('gitlab-dashboard.project-ids', JSON.stringify(projectIds));

  if (project !== null) {
    this.$root.$data.favoriteProjects.push(project);
  } else {
    gitlab.getProject(id)
      .then((proj) => {
        this.$root.$data.favoriteProjects.push(proj);
      });
  }

  return null;
};

store.addFavoriteProjects = (ids) => {
  localStorage.setItem('gitlab-dashboard.project-ids', JSON.stringify(ids));

  return null;
};

store.setFavoriteProjects = (projectIds, projects) => {
  localStorage.setItem('gitlab-dashboard.project-ids', JSON.stringify(projectIds));
  this.$root.$data.favoriteProjects = projects;
};

store.setToken = token => localStorage.setItem('gitlab-dashboard.token', token);

store.getToken = () => localStorage.getItem('gitlab-dashboard.token');
