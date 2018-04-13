<template>
    <tr>
        <td class="text-center">
            <div class="avatar d-block" style="background-image: url(https://secure.gravatar.com/avatar/ffc1b6b0c769a1500a8911b819c8caa9)">
                <span class="avatar-status bg-green"></span>
            </div>
        </td>
        <td>
            <div>{{ mergeRequest.title }}</div>
            <div class="small text-muted">
                {{ mergeRequest.author.username }} - {{mergeRequest.created_at}}
            </div>
        </td>
        <td>
            Up : {{mergeRequest.upvotes}} - Down : {{mergeRequest.downvotes}} <br />
            Com : {{mergeRequest.user_notes_count}}
        </td>
        <td class="text-center">

            <div>
               42 %
            </div>
        </td>

    </tr>

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
