<template>
  <footer>
    <b-navbar toggleable="md" type="dark" variant="info" fixed="bottom">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_text_collapse">
        <b-navbar-nav>
          <b-nav-text>
            <a
              class="github-button"
              href="https://github.com/Pouzor/dashboard-gitlabci"
              data-show-count="true"
              aria-label="Star Pouzor/dashboard-gitlabci on GitHub"
            >
              Star
            </a>
          </b-nav-text>
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
