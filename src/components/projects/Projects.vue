<template>

  <div>
      <project
          v-for="project in projects"
          :key="project.id"
          :project="project"
      >
      </project>


  </div>

</template>

<script>
import Project from './Project';
import storeLocal from './../../store/local';

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
    storeLocal.getFavoriteProjects()
      .then((projects) => {
        this.projects = projects;
      })
      .catch(error => console.log(error));
  },
};
</script>
