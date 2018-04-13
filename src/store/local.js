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

