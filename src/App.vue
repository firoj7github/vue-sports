<template>
 
  <NavBar></NavBar>
  <router-view></router-view>
  
  
  <FooterSite></FooterSite>
   
 
</template>

<script>
import NavBar from './components/NavBar.vue'

import FooterSite from './components/FooterSite.vue'

export default {
  name: 'App',
  components: {
    NavBar,
   
    FooterSite,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin: 0;
  padding: 0;
  
}
</style>
