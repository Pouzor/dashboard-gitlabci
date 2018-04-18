<template>
  <div class="col col-lg-4">
    <div class="row">
      <div class="col-lg-12">
        {{ project.path_with_namespace }}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        by <strong v-if="pipeline.user !== null">{{ pipeline.user.username }}</strong>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">#{{ pipeline.id }}</div>
      <div class="col-lg-6">{{ pipeline.finished_at | dateFromNow }}</div>
    </div>
    <!--<b-card bg-variant="primary"
            text-variant="white"
            :header="project.path_with_namespace"
            class="text-center"
            >
      <div class="card-text text-left">
        <strong>{{ pipeline.user.username }}</strong>
        <b-progress
          height="2rem"
          :value="pipeline.coverage"
          max="100"
          striped="striped"
          show-progress
          class="mb-2">
        </b-progress>
      </div>
      <div slot="footer">
        <div class="row">
          <div class="col-lg-6 text-left">
            <small class="">#{{ pipeline.id }}</small>
          </div>
          <div class="col-lg-6 text-right ">
            <small class="">{{ pipeline.finished_at }}</small>
          </div>
        </div>
      </div>
    </b-card>-->
  </div>
  <!--<div
    :class="pipeline.status == 'success' ?
    'card bg-success' : pipeline.status == 'failed' ? 'card bg-danger' : 'card'"
       style="width: 200px;float:left; margin-left: 10px; margin-bottom: 10px; height: 200px">
      <div class="card-header" style="font-size:14px"><b>{{project.name}}</b></div>
      <div class="card-body">
        <h6 class="card-title">
          <img :src="pipeline.user ? pipeline.user.avatar_url : null" style="width:30px"/>
          {{ pipeline.user ? pipeline.user.username : null }}
        </h6>
        <p class="card-text">Coverage : {{pipeline.coverage}}%</p>
      </div>
      <span class="badge badge-secondary">{{pipeline.ref}}</span>
  </div>-->
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
        user: { username: '' },
        ref: '',
        status: '',
      },
    };
  },
  methods: {
    fetchData() {
      storeGitLab.getPipeline(this.project.id)
        .then((pipeline) => {
          if (pipeline) {
            console.log('=======PIPELINE');
            console.log(this.project);
            console.log(pipeline);
            console.log('/=======PIPELINE');
            this.pipeline = pipeline;
            // this.pipeline.finishedt_at_from = momentjs().format(pipeline.finished_at).fromNow();
          } else {
            this.pipeline.status = 'No Test';
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  filters: {
    dateFromNow: date => moment(date, 'YYYY-MM-DDTHH:mm:ss.SSSZZ').fromNow(),
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
