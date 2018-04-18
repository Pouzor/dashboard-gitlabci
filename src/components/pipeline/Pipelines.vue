<template>
  <div>
    <pipeline
      v-for="project in projects"
      :key="project.id"
      :project="project"
    >
    </pipeline>
  </div>
</template>

<script>
import Pipeline from './Pipeline';
import eventBus from '../../eventBus';

export default {
  name: 'Pipelines',
  data() {
    return {
      projects: [],
    };
  },
  components: {
    Pipeline,
  },
  created() {
    eventBus.$on('favoriteProjects', (projects) => {
      this.projects = projects;
    });
  },
};
</script>
