<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <router-link :to="{ path: '/' }" class="navbar-brand" v-on:click="setActive('/')">
        Dashboard GitLab
      </router-link>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <router-link
            class="nav-link"
            :to="{ path: '/continuous-integration' }"
            v-on:click="setActive('/continuous-integration')"
            :class="{ active: isActive('/continuous-integration') }"
          >
            Continuous integration
          </router-link>
          <router-link
            class="nav-link"
            :to="{ path: '/merge-request' }"
            v-on:click="setActive('/merge-request')"
            :class="{ active: isActive('/merge-request') }"
          >
            Merge request
          </router-link>
        </b-navbar-nav>

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
  data() {
    return {
      activeItem: this.$route.path,
    };
  },
  created() {
    console.log(this.$route.path);
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
