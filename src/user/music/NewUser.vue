<template>
<button  class="btn btn toggle-button mt-5 ml-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  <i class="fas fa-bars"></i>
</button>


<div class="offcanvas offcanvas-start"  style="width: 20%;" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <!-- <div class="offcanvas-header"> -->
    <!-- </div> -->
    
  <div class="offcanvas-body ">

    
    <div class="wrapper">
      <div class="sidebar">
        <!-- <h2>Sidebar</h2> -->
        <h2 class="offcanvas-title mx-auto" id="offcanvasWithBothOptionsLabel">
          Prime
          <button type="button" class="btn-close text-reset ml-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </h2>
        <ul>
            <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
            <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
            <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
            <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
            <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
        </ul> 
        <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
</div>
    <!-- <ul class="navvBar list-unstyled" >
        <li>
          <a class="nav-link" href="allmuscians">All</a>
        </li> 
        <li >
          <a class="nav-link" href="musicartist">Music Artiste</a>
        </li> 
        <li >
          <a class="nav-link" href="brands">Bands</a>
        </li> 
        <li >
          <a class="nav-link" href="djs">Djs</a>
        </li>
    </ul> -->
  </div>

</div>
    <div id="main-content" >
      <div class="container">
        <div class="row">
          <h1 class="mb-5">Popular Musicians</h1> 
          <div class=" col-md-4 mx-auto" style="width:300px" v-for="(artist, index) in artists" :key="index">
            <img class="card-img-top w-100" :src="artist.imageUrl" alt="Card image" height="300" >
              <div class="card-body">
                <h4 class="card-title">{{ artist.firstName }}</h4>
                <p class="card-text">Band</p>
              </div>
          </div>
      </div>
      
      <div class="row mt-5" >
        <h1 class="mb-3">Recommended For You</h1> 
        <div class=" col-md-5 mx-auto" style="width:300px" v-for="(artist, index) in artists" :key="index">
            <img class="card-img-top w-100" :src="artist.imageUrl" alt="Card image" height="300" >
              <div class="card-body">
                <h4 class="card-title">{{ artist.firstName }}</h4>
                <p class="card-text">Band</p>
              </div>
            </div>
          </div>
        </div>

      <div class=" find  p-4 text-center">
        <h2>Not sure of what you want?</h2>
        <p>Finding the perfect musician has ever been easier</p>
        <button class="btnn"> Find Musicians </button>
      </div>

      <div class=" middle container p-5" >
          <div class="row" style="margin-left:5em ;" >
              <div class="col-md-3 "  >
                <!-- <i class="fa-solid fa-microphone-stand fa-spin fa-2xs"></i> -->
                <p class="p-4 text-center" style="height: 100px; width: 100px; border-radius: 50px ;background-color: #FFDDDD; ">
                  <i class="fa fa-microphone p-3" style="color: #A10035;"></i>
                </p> 
                <p class="ml-4">Artists</p>
              </div>
              <div class="col-md-3  " >
                <p class="p-4 text-center" style="height: 100px; width: 100px; border-radius: 50px ;background-color: #FFDDDD; ">
                  <i class="fa fa-microphone p-3" style="color: #A10035;"></i>
                </p> 
                <p class="ml-4">Bands</p>
              </div>
              <div class="col-md-3  " >
                <p class="p-4 text-center" style="height: 100px; width: 100px; border-radius: 50px ;background-color: #FFDDDD; ">
                  <i class="fa fa-microphone p-3" style="color: #A10035;"></i>
                </p> 
                <p class="ml-4">Djs</p>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card img-fluid" >
                <img class="card-img-top " src="../../assets/Camera/bride.jpg" height="300"  alt="Card image" >
                <div class="card-img-overlay" style="margin-top: 60%;">
                  <h2 class="card-title text-light text-center">Wedding Party</h2>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card img-fluid" >
                <img class="card-img-top " src="../../assets/Camera/church.jpg" height="300"  alt="Card image" >
                <div class="card-img-overlay" style="margin-top: 60%;">
                  <h2 class="card-title text-light text-center">Wedding Party</h2>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card img-fluid" >
                <img class="card-img-top " src="../../assets/Camera/birthday.jpg" height="300"  alt="Card image" >
                <div class="card-img-overlay" style="margin-top: 60%;">
                  <h2 class="card-title text-light text-center">Wedding Party</h2>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="footer text-center p-3 text-light mt-5" style="background-color: #A10035;">
          <h3 class="">
              Jahnus Music Industry @2023
          </h3>
      </div>

    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        user: null,
        id: "",
        artists: null,
      };
    },
    created() {
      this.getUser();
      this.getAllArtist();
      this.id = this.$route.params.id;
    },
    methods: {
      getUser() {
        axios.get("http://localhost:8000/getUser")
          .then((res) => {
            // console.log(res.data);
            this.user = res.data.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },

      getAllArtist(){
        axios.get("http://localhost:8000/getAllArtist")
        .then((res)=>{
          console.log(res.data);
          this.artists = res.data;

        })
      }
    }
  }
</script>
<style scoped>

.offcanvas{
  background-color: white;
}

#main-content{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: auto;
    overflow-x: visible;
  }

  .find{
    background-color: #FFDDDD;
  }
  /* .navvBar{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  } */
  /* .navvBar  {
    list-style: none;
    text-decoration: none;
  }
  .navvBar li a{
    list-style: none;
    text-decoration: none;
    color: #A10035;
    padding:2em;
  }
  .navvBar a{
      padding: 15px 25px;
      text-decoration: none;
      font-size: 18px;
      color: #ffffff;
      display: block;
      transition: 0.3s;
  }

  .navvBar  :hover{
    color:white;
    background-color: #A10035;
    border-radius: 20px;
  } */
 

  .btnn {
 background-color: #A10035;
 padding: 14px 40px;
 color: #fff;
 text-transform: uppercase;
 letter-spacing: 2px;
 cursor: pointer;
 border-radius: 10px;
 border: 2px dashed #A10035;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
 transition: .4s;
}

.btnn span:last-child {
 display: none;
}

.btnn:hover {
 transition: .4s;
 border: 2px dashed #A10035;
 background-color: #fff;
 color: #A10035;
}

.btnn:active {
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
  width: 20%;
  height: 100%;
  background: #4b4276;
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}    

.wrapper .sidebar ul li a{
  color: #bdb8d7;
  display: block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}

.wrapper .sidebar ul li:hover{
  background-color: #594f8d;
}
    
.wrapper .sidebar ul li:hover a{
  color: #fff;
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
  background: #594f8d;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #bdb8d7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}


@media (max-height: 500px){
  .social_media{
    display: none !important;
  }
}



</style>