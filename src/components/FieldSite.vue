<template>
  <div class="field-all">
  <div class="field">
    <div class="field-1">
      <img src="../assets/image/300.png.png" alt="">
    </div>
    <div class="field-2">
      <img src="../assets/image/400.png.png" alt="">
    </div>
  </div>

  </div>
</template>

<script>

export default {
  name: 'FieldSite',
  
}
</script>

<style>
.field-all{
     background-color: rgb(15, 13, 13);
    height: 700px;
    width: 100%;
}
.field{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.field-1 img{
margin-top: 80px;
margin-left: 100px;
z-index: 2;
}
.field-2 img{
  width: 700px;
  height: 500px;
  margin-left: -80px;
  
}
</style>