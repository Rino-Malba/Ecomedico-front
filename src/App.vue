<template>
  <Navbar/>
  <router-view/>
  <BG/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BG from './components/BG.vue';

export default{
  name: 'App',
  components: {
    Navbar,
    BG,
  }
}
</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #00bd32;
      
    }
  }
}
</style>
