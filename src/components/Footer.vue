<template>
  <footer>
    <b-navbar toggleable="md" type="dark" variant="info" fixed="bottom">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_text_collapse">
        <b-navbar-nav>
          <b-nav-text>Hello world!</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
