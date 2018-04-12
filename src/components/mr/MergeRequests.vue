<template>
  <section>
    <h2>Merge requests</h2>
    <ul class="list-group">
      <merge-request
        v-for="mergeRequest in mergeRequests"
        :key="mergeRequest.id"
        :mergeRequest="mergeRequest">
      </merge-request>
    </ul>
  </section>
</template>

<script>
import MergeRequest from './MergeRequest';
import storeGitLab from './../../store/gitLab';

export default {
  name: 'MergeRequests',
  components: {
    MergeRequest,
  },
  data() {
    return {
      mergeRequests: [],
    };
  },
  created() {
    storeGitLab.getMergeRequest()
      .then(mrs => {
        this.mergeRequests = mrs;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
