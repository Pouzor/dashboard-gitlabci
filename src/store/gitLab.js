import axios from 'axios';
import Promise from 'promise';
import {EventEmitter} from 'events';

const store = new EventEmitter();

export default store;

store.getProjects = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.GITLAB_URL}/api/v4/projects?private_token=${process.env.GITLAB_TOKEN}&simple=true&order_by=last_activity_at&sort=desc&membership=true`)
            .then(response => {
                if (response.data) {
                    return resolve(response.data);
                }

                return reject(new Error('Invalid response'));
            })
            .catch(error => {
                return reject(error);
            })
    });
};


store.getPipeline = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.GITLAB_URL}/api/v4/projects/${id}/pipelines?private_token=${process.env.GITLAB_TOKEN}`)
            .then(response => {

                if (response.data && response.data.length === 0) {

                    return resolve(null);
                } else {
                    console.log(response.data[0]);

                    return resolve(response.data[0]);
                }

            })
            .catch(error => {
                return reject(error);
            })
    });
};
