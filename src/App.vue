<template>
  <div>
    <d-header></d-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <d-footer></d-footer>
  </div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/header/Header';
import storeLocal from './store/local';

export default {
  name: 'Main',
  components: {
    dFooter: Footer,
    dHeader: Header,
  },
  created() {
    storeLocal.getFavoriteProjects()
      .then((projects) => {
        console.log('set fav proj');
        this.$root.$data.favoriteProjects = projects;
        this.$root.$emit('helloWorld');
      })
      .catch(error => console.log(error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
