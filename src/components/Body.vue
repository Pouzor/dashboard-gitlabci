<template>
    <body class="container">
    <div class="row">
        <div class="col-8">
            <h2>CI</h2>
            <projects></projects>
        </div>
        <div class="col-4">
            <merge-requests></merge-requests>
        </div>
    </div>
    </body>
</template>

<script>
import MergeRequests from './mr/MergeRequests';
import Projects from './projects/Projects';

export default {
  name: 'Body',
  components: {
    MergeRequests,
    Projects,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
