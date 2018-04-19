<template>
  <div class="col col-lg-4 pipeline">
    <div
      class="alert"
      v-bind:class="{
      'alert-success': pipeline.status === 'success',
      'alert-danger': pipeline.status === 'failed' || pipeline.status === null,
      'alert-primary': pipeline.status === 'running',
      'alert-warning': pipeline.status === 'canceled' || pipeline.status === 'skipped',
      'alert-secondary': pipeline.status === 'pending'
    }"
      role="alert"
    >
      <div class="row project-name">
        <div class="col-lg-12 text-center">
          <h5 class="alert-heading"><strong>{{ project.path_with_namespace }}</strong></h5>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          by <strong v-if="pipeline.user !== null">{{ pipeline.user.username }}</strong>
        </div>
        <div class="col-lg-4 text-right">
          <span
            class="badge badge-pill"
            v-bind:class="{
              'badge-danger': pipeline.coverage === null || pipeline.coverage < 50,
              'badge-warning': pipeline.coverage < 75,
              'badge-success': pipeline.coverage >= 75
            }"
          >
            {{ pipeline.coverage }}%
          </span>
        </div>
      </div>
      <hr>
      <div class="row mb-0">
        <div class="col-lg-4 mb-0">#<strong>{{ pipeline.id }}</strong></div>
        <div class="col-lg-8 mb-0 text-right">{{ pipeline.finished_at | dateFromNow }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import storeGitLab from '../../store/gitLab';

export default {
  name: 'Pipeline',
  props: {
    project: Object,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      pipeline: {
        user: {
          username: null,
        },
        status: null,
      },
    };
  },
  methods: {
    fetchData() {
      storeGitLab.getPipeline(this.project.id)
        .then((pipeline) => {
          console.log(pipeline);
          if (pipeline !== null) {
            this.pipeline = pipeline;
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  filters: {
    dateFromNow: date => (!date ? '-' : moment(date, 'YYYY-MM-DDTHH:mm:ss.SSSZZ').fromNow()),
  },
};
</script>

<style>
.pipeline {
  padding-left: 6px;
  padding-right: 6px;
  min-height: 200px;
}

.alert {
  height: 180px;
}

.project-name {
  height: 100px;
}

hr {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
</style>
