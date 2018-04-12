<template>
  <div>
    <d-header></d-header>
    <d-body></d-body>
    <d-footer></d-footer>
  </div>
</template>

<script>
import Body from './Body';
import Footer from './Footer';
import Header from './header/Header';

export default {
  name: 'Main',
  components: {
    dBody: Body,
    dFooter: Footer,
    dHeader: Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
