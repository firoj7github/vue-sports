<template>
  <div class="slider-all">
  <div class="slider">
    <div class="slider-1">
     <h1>Come With Us</h1>
     <p>We have programs for all sports condition levels of ability, and coaches and mentors in place to help you training, plate-loaded machines, lifting racks sports and cable motion.</p>
     <button>Start Now</button>
    </div>
    <div class="slider-2">
      <img src="../assets/image/1.png" alt="">
    </div>

  </div>
  </div>
</template>

<script>


export default {
  name: 'SliderSite',
  
}
</script>

<style>
.slider-all{
    background-color: rgb(15, 13, 13);
    width: 100%;
    height: 570px;
}
.slider{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.slider-1{
  margin-top: 145px;
  color:white;
  width: 580px;
  margin-left: 134px;
}
.slider-1 button{
 padding-left: 20px;
 padding-right: 20px;
 padding-top: 7px;
 padding-bottom: 7px;
 background-color: chocolate;
 font-size: 19px;
 color: white;
 border-radius: 8px;
}
.slider-1 p{
  margin-bottom: 20px;
  font-size: 18px;
}
.slider-1 h1{
  font-size: 57px;
  font-weight: 700;
  margin-bottom: 10px;
}
.slider-2 img{
 
  margin-left: 40px;
}
</style>