<template>
  <div class="row">
    <div class="col-12">
      <h2>Continuous Integration</h2>
      <projects></projects>
    </div>
  </div>
</template>

<script>
import Projects from './../projects/Projects';

export default {
  name: 'CIIndex',
  components: {
    Projects,
  },
};
</script>
