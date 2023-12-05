<template>
  
  <div class='d-flex '>
  <button  class="btn btn toggle-button mt-3 ml-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  <i class="fas fa-bars"></i>
</button>
      <p class="mt-4" style="margin-left: 65%;">
       <router-link to="/bookingone"><button class="btn btn-danger">Booking</button>
          <i class="fa fa-user ml-3 "></i>
      </p>
    </div>


<div class="offcanvas offcanvas-start"  style="width: 25%;" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-body ">
    <div class="wrapper">
      <div class="sidebar">
        <h2 >
          Prime
          <button type="button" class="btn-close text-reset mr-auto w-25 " data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </h2>
        <ul>
            <li><router-link to="/homeuser"><i class="fas fa-home"></i>Home</router-link></li> 
            <li><router-link to="/allartist"><i class="fas fa-border-all"></i>All Artist</router-link></li> 
            <li><router-link to="/musicartist"><i class="fas fa-music"></i>Music Artists</router-link></li> 
            <li><router-link to="/bands"><i class="fas fa-drum"></i>Bands</router-link></li> 
            <li><router-link to="/djs"><i class="fas fa-compact-disc"></i>Djs</router-link></li> 
            <li @click="logOut()"><a href=""><i class=" fas fa-sign-out-alt"></i>LogOut</a></li>
          
        </ul> 
        <div class="social_media mb-4">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
</div>
  </div>
</div>

</template>

<script>
export default {
  data(){
        return{
        
        }
    },
    created(){

    },
    methods:{
            logOut(){
              localStorage.removeItem("token");
              localStorage.removeItem( "users");
              this.$router.push('/login')

             }
    }

}
</script>

<style scoped>
.offcanvas{
  /* background: #4b4276; */
  background: #A10035;
}

.btn {
 background-color: #A10035;
 padding: 10px 20px;
 color: #fff;
 text-transform: uppercase;
 letter-spacing: 2px;
 cursor: pointer;
 border-radius: 10px;
 border: 2px dashed #A10035;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
 transition: .4s;
}

.btn span:last-child {
 display: none;
}

.btn:hover {
 transition: .4s;
 border: 2px dashed #A10035;
 background-color: #fff;
 color: #A10035;
}

.btn:active {
 background-color: #FFDDDD;
}


.offcanvas-body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}


.wrapper{
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.wrapper .sidebar{
  list-style: none;
  text-decoration: none;
  width: 25%;
  height: 100%;
  /* background: #4b4276; */
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2{
  color: white;
  font-size: 3em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  list-style: none;
  text-decoration: none;
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}    

.wrapper .sidebar ul li a{
  list-style: none;
  text-decoration: none;
  color: white;
  display: block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}

.wrapper .sidebar ul li:hover{
  /* background-color: #594f8d; */
  background-color: white;
  border-radius: 5px;
}
    
.wrapper .sidebar ul li:hover a{
  color: black;
  /* color: #fff; */
}
 
.wrapper .sidebar .social_media{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.wrapper .sidebar .social_media a{
  display: block;
  width: 40px;
  background: white;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #A10035;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}


@media (max-height: 500px){
  .social_media{
    display: none !important;
  }
}
</style>