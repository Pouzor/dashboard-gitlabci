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
import eventBus from '../../eventBus';

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
    eventBus.$on('favoriteProjects', (projects) => {
      this.projects = projects;
    });
  },
};
</script>
