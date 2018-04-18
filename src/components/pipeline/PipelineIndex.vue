<template>
  <div class="row">
    <div class="col-12">
      <h2>Continuous Integration</h2>
      <pipelines></pipelines>
    </div>
  </div>
</template>

<script>
import Pipelines from './/Pipelines';

export default {
  name: 'CIIndex',
  components: {
    Pipelines,
  },
};
</script>
