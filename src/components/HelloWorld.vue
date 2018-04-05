<template>
<div id="app">

    <h1>GitLab CI</h1>
    <h2>Projects</h2>

  <md-card v-for="project in projects">
      <md-card-header>
        <div class="md-title">{{ project.name }}</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getProject()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: []
    }
  },
  methods: {
    getProject() {
      axios
        .get('').then(response => {
          this.projects = response.data
        })
        .catch(e => {
          console.log(e)
        })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

</style>
