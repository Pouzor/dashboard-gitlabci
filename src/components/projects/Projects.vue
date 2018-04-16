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
  },
};
</script>
