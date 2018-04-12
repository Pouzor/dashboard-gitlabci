<template>
  <li
    :class="mergeRequest.upvotes > 0 ?
    'list-group-item list-group-item-success' : 'list-group-item'"
  >
    {{ mergeRequest.title }} by <b>{{ mergeRequest.author.username }}</b><br/>
    Up : {{mergeRequest.upvotes}} - Down : {{mergeRequest.downvotes}} - Com :
    {{mergeRequest.user_notes_count}}
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
