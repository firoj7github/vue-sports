<template>
  <div class="blog-all">
         <div class="blog">
        <div class="blog-1">
            <h1>Fitness First</h1>
            <p>Our fitness suites feature the hottest new equipment out at the moment, including a SYNRGY360 training area, WLinear training rig, Watt bikes and the latest cardio equipment from Life functional training, plate-loaded machines, lifting racks and cable motion.Out at the moment, including a SYNRGY360 training</p>
            <button>View More</button>
        </div>
        <div class="blog-2">
            <img src="../assets/image/500.png" alt="">
        </div>
    </div>
    
   
  </div>
</template>

<script>


export default {
  name: 'BlogSite',
  
}
</script>

<style scoped>
.blog-all{
    width: 100%;
    height: 700px;
     background-color: rgb(27, 26, 26);
     clip-path: polygon(0 28%, 100% 1%, 100% 100%, 0% 100%);
     margin-top: -196px;
     z-index: 1;
}
.blog{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.blog-2 img{
    height: 600px;
    margin-top: 130px;
}
.blog-1 h1{
  margin-top: 310px;
  
  font-size: 45px;
  font-weight: 700;
}
.blog-1{
color: white;
margin-left: 100px;
width: 475px;
}
.blog-1 button{
  padding-left: 20px;
 padding-right: 20px;
 padding-top: 7px;
 padding-bottom: 7px;
 background-color: chocolate;
 font-size: 19px;
 color: white;
 border-radius: 8px;
}
.blog-1 p{
  margin-bottom: 20px;
}
    


</style>