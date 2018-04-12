<template>
  <div class="row">
    <div class="col-12">
      <h2>Merge Requests</h2>
      <merge-requests></merge-requests>
    </div>
  </div>
</template>

<script>
import MergeRequests from './../mr/MergeRequests';

export default {
  name: 'CIIndex',
  components: {
    MergeRequests,
  },
};
</script>
