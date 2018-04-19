<template>
  <li
    :class="mergeRequest.merge_status === 'can_be_merged' ?
    'list-group-item list-group-item-success' : 'list-group-item'"
  >
    <div class="row">
      <div class="col-lg-8">
        <a class="deco-none" :href="mergeRequest.web_url">{{ mergeRequest.title }}</a>
        by <strong>{{ mergeRequest.author.username }}</strong>
      </div>
      <div class="col-lg-4 text-right">
        {{ mergeRequest.created_at | dateFromNow }}
      </div>
      <div class="col-lg-12">
        <span
          v-for="(label, index) in mergeRequest.labels"
          :key="index"
          class="badge badge-primary"
        >
          {{ label }}
        </span>
        <span class="badge badge-pill badge-success">{{ mergeRequest.upvotes }}</span>
        <span class="badge badge-pill badge-danger">{{ mergeRequest.downvotes }}</span>
        <span class="badge badge-pill badge-warning">{{ mergeRequest.user_notes_count }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import moment from 'moment';

export default {
  name: 'MergeRequest',
  props: {
    mergeRequest: Object,
  },
  filters: {
    dateFromNow: date => (!date ? '-' : moment(date, 'YYYY-MM-DDTHH:mm:ss.SSSZZ').fromNow()),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.deco-none {
  color: inherit;
  text-decoration:none;
}
</style>
