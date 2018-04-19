<template>
  <div>
    <d-header></d-header>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <d-footer></d-footer>
  </div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/header/Header';

export default {
  name: 'Main',
  components: {
    dFooter: Footer,
    dHeader: Header,
  },
  created() {
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://buttons.github.io/buttons.js');
    document.head.appendChild(recaptchaScript);

    this.$store.commit('init');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
