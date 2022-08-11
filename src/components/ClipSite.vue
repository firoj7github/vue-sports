<template>
 <div class="clip-all">
    <div class="clip">
        <div class="clip-1">
            <h1>Discover new Activity</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
            <br><br> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
        </div>
        <div class="clip-2">
            <img class="img-1" src="../assets/image/100.png" alt="">
            <img class="img-2" src="../assets/image/200.png" alt="">
        </div>
    </div>
 </div>

</template>

<script>


export default {
  name: 'ClipSite',
  
}
</script>

<style>
.clip-all{
    width: 100%;
    height:480px;
     background-color: rgb(15, 13, 13);
}
.clip{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

}
.clip-1{
    width: 1000px;
    height: 730px;
    background-color: rgb(19, 18, 18);
 clip-path: polygon(71% 0, 71% 23%, 93% 23%, 100% 100%, 0 100%, 0 24%);
    margin-top: -260px;
}
.clip-1 h1{
    color: white;
    margin-left: 140px;
    margin-top: 390px;
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 10px;
}
.clip-1 p{
    width: 450px;
     margin-left: 140px;
     color: white;
}
.clip-2{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.clip-2 img{
    width: 230px;
    height: 330px;
   
   z-index: 1;
}
.img-2{
   margin-left: -120px;
   margin-top: 140px;
   border-radius: 5px;
}
.img-1{
   margin-left: -200px;
     margin-top: 140px;
     border-radius: 5px;
}

</style>
