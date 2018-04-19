<template>
  <div class="row homepage">
    <div class="col-8">
      <pipelines></pipelines>
    </div>
    <div class="col-4">
      <merge-requests></merge-requests>
    </div>
  </div>
</template>

<script>
import MergeRequests from './mr/MergeRequests';
import Pipelines from './pipeline/Pipelines';

export default {
  name: 'Homepage',
  components: {
    MergeRequests,
    Pipelines,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homepage {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
