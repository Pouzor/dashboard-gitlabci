<template>
  <b-modal
    id="modal-settings"
    ref="modal"
    title="Settings"
    @ok="handleOk"
    @shown="clearFields"
    size="lg"
  >
    <form @submit.stop.prevent="handleSubmit">
      <b-row>
        <b-col sm="3">
          <label for="token">Token:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="token"
                        type="text"
                        placeholder="Token"
                        id="token"
          >
          </b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12">
          Favorite projects:
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="9">
          <b-form-input v-model="searchTerm"
                        type="text"
                        placeholder="Term"
                        id="search-term"
          >
          </b-form-input>
        </b-col>
        <b-col sm="3">
          <b-button v-on:click="search">
            Search
          </b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12">
          <label for="projects">Result (select favorite projects):</label>
          <b-form-select
            v-on:change="changeProjectSelect"
            :select-size="10"
            v-model="selectedProjectIds"
            :options="projects"
            text-field="name"
            value-field="id"
          >
          </b-form-select>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12">
          <b-table small striped hover :items="selectedProjects" :fields="fields">
            <template slot="action" slot-scope="data">
              <b-button
                size="sm"
                v-on:click="deleteProject(data.item.id)"
                variant="danger"
              >
                Delete
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>

<script>
import storeGitLab from './../../store/gitLab';

export default {
  name: 'Settings',
  data() {
    return {
      searchTerm: null,
      fields: ['id', 'name', 'action'],
      selectedProjectIds: [],
      selectedProjects: [],
      projects: [],
      projectIds: [],
      token: null,
    };
  },
  created() {
    this.projectIds = localStorage.getItem('gitlab-dashboard.project-ids') !== null ? JSON.parse(localStorage.getItem('gitlab-dashboard.project-ids')) : [];

    for (let i = 0; i < this.projectIds.length; i += 1) {
      storeGitLab.getProject(this.projectIds[i])
        .then((project) => {
          this.projects.push(project);
          this.selectedProjects.push(project);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  },
  methods: {
    deleteProject(id) {
      for (let i = 0; i < this.projectIds.length; i += 1) {
        if (this.projectIds[i] === id) {
          this.projectIds.splice(i, 1);
        }
      }

      for (let i = 0; i < this.selectedProjects.length; i += 1) {
        if (this.selectedProjects[i].id === id) {
          this.selectedProjects.splice(i, 1);
        }
      }
    },
    changeProjectSelect(projectId) {
      for (let i = 0; i < this.projects.length; i += 1) {
        if (this.projects[i].id === projectId) {
          if (this.projectIds.indexOf(projectId) === -1 || this.projectIds.length === 0) {
            this.selectedProjects.push(this.projects[i]);
            this.projectIds.push(projectId);
          }

          i = this.projects.length;
        }
      }
    },
    search() {
      storeGitLab.searchProjects(this.searchTerm)
        .then((projects) => {
          this.projects = projects;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    clearFields() {
      this.token = localStorage.getItem('gitlab-dashboard.token');
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();

      if (!this.token) {
        alert('Please set your token API');
      } else {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      localStorage.setItem('gitlab-dashboard.token', this.token);
      localStorage.setItem('gitlab-dashboard.project-ids', JSON.stringify(this.projectIds));

      this.clearFields();
      this.$refs.modal.hide();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
