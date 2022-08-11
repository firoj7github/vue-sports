<template>
 
  
  
  
  <SliderSite></SliderSite>
  <ClipSite></ClipSite> 
  <FieldSite></FieldSite>
  <BlogSite></BlogSite> 
  
   
 
</template>

<script>

import SliderSite from '../SliderSite.vue'
import ClipSite from '../ClipSite.vue'
import FieldSite from '../FieldSite.vue'
import BlogSite from '../BlogSite.vue'


export default {
   name: 'HomeSite',
  components: {
   
    SliderSite,
    ClipSite,
    FieldSite,
    BlogSite,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
 
  
}
</style>