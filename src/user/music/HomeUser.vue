<template>
  
  <div class='d-flex '>
      <p> <UserSideBar/> </p>
      <p class="mt-5" style="margin-left: 70%;">
          <a href="bookingone" ><button class="btn btn-danger">Booking</button></a>
          <i class="fa fa-user ml-5"></i>
      </p>
    </div>

      <div id="main-content" >
      <!-- <div class="container">
        <div class="row">
          <h1 class="mb-5">Popular Musicians</h1> 
          <div class=" col-md-3 mx-auto"  v-for="(artist, index) in artists" :key="index">
            <img class="card-img-top w-50 h-50" :src="artist.imageUrl" alt="Card image" height="300" >
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
        <button class="btn btn-danger"> Find Musicians </button>
      </div>

      <div class=" middle container p-5" >
          <div class="row" style="margin-left:5em ;" >
              <div class="col-md-3 "  >
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
      </div> -->

    </div>
</template>

<script>
import axios from 'axios';
import UserSideBar from '../UserSideBar.vue';
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
      
      // login user
        getUser() {
            axios.get("http://localhost:8000/getUser")
                .then((res) => {
                this.user = res.data.data;
            })
                .catch((error) => {
                console.error(error);
            });
        },

        // getting all the artist
        getAllArtist() {
            axios.get("http://localhost:8000/getAllArtist")
                .then((res) => {
                console.log(res.data);
                this.artists = res.data;
            });
        }
    },
    components: { UserSideBar, UserSideBar }
}
</script>
<style scoped>



#main-content{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: auto;
    overflow-x: visible;
  }

  .find{
    background-color: #FFDDDD;
  }
  

  



</style>