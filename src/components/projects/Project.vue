<template>
    <b-col cols="4">
        <div  class="project_ci">
            {{project.name}} <br />
            {{status}}
        </div>
    </b-col>
</template>


<script>
import storeGitLab from './../../store/gitLab';

export default {
  name: 'project',
  props: {
    project: Object,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      status: '',
    };
  },
  methods: {
    fetchData() {
      storeGitLab.getPipeline(this.project.id)
        .then((pipeline) => {
          if (pipeline) {
            this.status = pipeline.status;
          } else {
            this.status = 'No Tests';
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style>
    .project_ci {
        height: 100px;
        border: 1px solid #eee;
        margin-top: 10px;
    }
</style>
