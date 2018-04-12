<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Dashboard GitLab</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav right>
            <b-nav-item href="#" v-b-modal.modal-settings>Settings</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <settings></settings>
  </header>
</template>

<script>
import Settings from './Settings';

export default {
  name: 'Header',
  components: { Settings },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
