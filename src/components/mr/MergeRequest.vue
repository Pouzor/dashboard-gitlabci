<template>
  <li>
    {{ mergeRequest.title }} by {{ mergeRequest.author.username }}<br />
      Up : {{mergeRequest.upvotes}} - Down : {{mergeRequest.downvotes}} - Com : {{mergeRequest.user_notes_count}}
  </li>
</template>

<script>
export default {
  name: 'MergeRequest',
  props: {
    mergeRequest: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
