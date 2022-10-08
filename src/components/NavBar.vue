<template>
  
<div class="nav">
  <div class="nav-all">
    <div class="nav-1">
      <img src="../assets/image/80.png" alt="">
    </div>
    <div class="nav-2">
      
        <li><router-link class="first" to="/">Home</router-link></li>
        <li> <router-link class="first" to="/about">About</router-link></li>
        <li> <router-link class="first" to="/contact">Blog</router-link></li>
   
        
    </div>
  </div>

</div>
 
</template>

<script>

export default {
  name :'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.nav{
  background-color: rgb(22, 21, 21);
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0px;
  z-index: 5;
  
}
.nav-all{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.nav-1  {
  
  color: white;
  margin-top: 7px;
  margin-left: 0px;
 
  
  

}
.nav-1 img{
  height: 60px;
 
}
.nav-2  {
  display: flex;
  flex-direction: row;
  color: white;
  margin-left: 390px;
  text-decoration: none;
 
  

}
.nav-2 li{
 
padding: 20px;
font-size: 19px;

}
.first{
text-decoration: none;
color: white;
}
</style>
