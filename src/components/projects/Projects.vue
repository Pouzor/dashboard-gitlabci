<template>

  <div>
      <project
          v-for="project in $root.$data.favoriteProjects"
          :key="project.id"
          :project="project"
      >
      </project>


  </div>

</template>

<script>
import Project from './Project';
// import storeLocal from './../../store/local';

export default {
  name: 'projects',
  data() {
    return {
      projects: [],
    };
  },
  components: {
    Project,
  },
  created() {
    console.log('created projects');
    /* storeLocal.getFavoriteProjects()
      .then((projects) => {
        this.projects = projects;
      })
      .catch(error => console.log(error)); */
  },
  methods: {
    helloWorld() {
      console.log('hello world');
    },
  },
};
</script>
