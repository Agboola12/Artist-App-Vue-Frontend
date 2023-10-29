<template>
<button  class="btn btn toggle-button mt-5 ml-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  <i class="fas fa-bars"></i>
</button>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title mx-auto" id="offcanvasWithBothOptionsLabel">
      <img src="../../assets/Camera/Logo.png" height="100" width="100"/>
    </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body mt-5">
    <ul class="navvBar list-unstyled" >
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
    </ul>
    
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
        <div class=" col-md-4 mx-auto" style="width:300px" v-for="(artist, index) in artists" :key="index">
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
        <button class="btn"> Find Musicians </button>
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

      <div class="footer text-center p-4 text-light mt-5" style="background-color: #A10035;">
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
  .navvBar{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .navvBar  {
    list-style: none;
    text-decoration: none;
  }
  .navvBar li a{
    list-style: none;
    text-decoration: none;
    color: #A10035;
    padding:2em;
  }
  .navvBar  :hover{
    color:white;
    background-color: #A10035;
    border-radius: 20px;
  }
 

  .btn {
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




</style>