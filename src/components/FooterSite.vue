<template>
  <div class='footer-all'>
            <h5>Join our team for grow your fitness and healthy life </h5>
            <p>If you have any information, just let me know. If you do <span className='sample'>not, just relax and let me awe you with my work.</span> </p>
           
             
           
           <input class='field-site' type='email' placeholder='Your Email'/>
          <button class='submit-btn'>Submit</button>
          <hr class='line-big'/>

          
              <div class='footer-site'>
              <div>
                  <h4>Gym Service @2022</h4>
                  
                </div>
                <div>
                <span class='logo'>
                <!-- <a href="https://www.linkedin.com/in/firoj-hossain-878765220/"><span className='icon-system-1'><FaLinkedin></FaLinkedin></span></a>
                <a href="https://github.com/firoj7github"><span className='icon-system-2'> <FaGithubSquare></FaGithubSquare> </span></a>
               
                <a href="https://www.w3schools.com"> <span className='icon-system-3'> <FaFacebook></FaFacebook> </span></a> -->
                
                    
                    
                     
                 
                
             
                
                </span>
               
                </div>
             
          </div>

        
              
        </div>
</template>

<script>


export default {
  name: 'FooterSite',
  
}
</script>

<style scoped>
.footer-all{
    width: 100%; 
    height: 570px;
   background-color: rgb(19, 18, 18);
    clip-path: inset(0 0 0 0);
   
 }
 .footer-all h5{
    color: white;
    text-align: center;
    padding-top: 75px;
    margin-bottom: 40px;
    font-size: 27px;
    font-weight: 500;
 }
 .footer-all p{
    width: 500px;
    color: white;
    margin-left: 450px;
    font-size: 18px;
    font-weight: 400;
    padding-top: 15px;
    opacity: 97%;
    margin-bottom: 40px;
 }
 .sample{
    margin-left:40px ;
 }
 .field-site{
   background-color: rgb(19, 18, 18);
    width: 400px;
    height: 48px;
    border:  1px solid white;
    border-radius: 3px;
    margin-left: 415px;
    font-size: 19px;
    font-weight: 700;
    color: white;
    padding-left: 10px;
   
 
 }
 .submit-btn{
  background-color: rgb(235, 53, 89);
   padding-left: 25px;
   padding-right: 25px;
   padding-top: 12px;
   padding-bottom: 11px;
   margin-left: 14px;
   border-radius: 5px;
   font-size: 17px;
   font-weight: 700;
   color: white;
  margin-bottom: 70px;
   
 }
 .line-big{
    width: 1150px;
    background-color: white;
   height: 2px;
   margin-left: 90px;
 }
 .footer-site{
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   
 }
 .footer-site h4{
    padding-top: 50px;
    color: white;
    opacity: 97%;
    margin-left: 86px;
    font-size: 21px;
 }
 .logo{
 margin-left: 440px;
 text-decoration: none;
 display: flex;
 padding-top: 5px;
 
 
 
 
 
 }
 .logo a{
   padding: 15px;
   font-size: 20px;
   
 }
 .icon-system-1{
    padding: 10px;
    color: white;
    margin: 5px;
    font-size: 20px;
   
 }
 .icon-system-2{
   padding-left: 5px;
    color: white;
    margin: 5px;
   
 }
 .icon-system-3{
    padding: 10px;
    color: white;
    margin: 5px;
   
 }
</style>
