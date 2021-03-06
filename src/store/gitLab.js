import axios from 'axios';
import Promise from 'promise';
import { EventEmitter } from 'events';
import eventBus from '../eventBus';

const store = new EventEmitter();

export default store;

store.getMergeRequest = () => new Promise((resolve) => {
  eventBus.$on('favoriteProjects', (projects) => {
    const calls = [];
    projects.forEach((project) => {
      calls.push(axios.get(`${process.env.GITLAB_URL}/api/v4/projects/${project.id}/merge_requests?state=opened&private_token=${process.env.GITLAB_TOKEN}`));
    });

    axios.all(calls)
      .then(
        axios.spread((...responses) => {
          const mrs = [];
          responses.forEach((project) => {
            project.data.forEach((mr) => {
              mrs.push(mr);
            });
          });

          return resolve(mrs);
        }));
  });
});

store.getPipeline = id => new Promise((resolve, reject) => {
  axios.get(`${process.env.GITLAB_URL}/api/v4/projects/${id}/pipelines?private_token=${process.env.GITLAB_TOKEN}`)
    .then((response) => {
      if (response.data && response.data.length === 0) {
        resolve(null);
      } else {
        axios.get(`${process.env.GITLAB_URL}/api/v4/projects/${id}/pipelines/${response.data[0].id}?private_token=${process.env.GITLAB_TOKEN}`)
          .then(response2 => resolve(response2.data))
          .catch(error => reject(error));
      }
    })
    .catch(error => reject(error));
});


store.getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${process.env.GITLAB_URL}/api/v4/projects?private_token=${process.env.GITLAB_TOKEN}&simple=true&order_by=last_activity_at&sort=desc&membership=true&per_page=100`)
    .then((response) => {
      if (response.data) {
        return resolve(response.data);
      }

      return reject(new Error('Invalid response'));
    })
    .catch(error => reject(error));
});

store.searchProjects = term => new Promise((resolve, reject) => {
  axios.get(`${process.env.GITLAB_URL}/api/v4/projects?private_token=${process.env.GITLAB_TOKEN}&simple=true&order_by=name&sort=asc&search=${term}`)
    .then((response) => {
      if (response.data) {
        return resolve(response.data);
      }

      return reject(new Error('Invalid response'));
    })
    .catch(error => reject(error));
});

store.getProject = id => new Promise((resolve, reject) => {
  axios.get(`${process.env.GITLAB_URL}/api/v4/projects/${id}?private_token=${process.env.GITLAB_TOKEN}`)
    .then((response) => {
      if (response.data) {
        return resolve(response.data);
      }

      return reject(new Error('Invalid response'));
    })
    .catch(error => reject(error));
});
