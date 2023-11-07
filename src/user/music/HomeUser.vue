<template>
  
  <div class='d-flex '>
      <p> <UserSideBar/> </p>
      <p class="mt-5" style="margin-left: 70%;">
          <a href="bookingone" ><button class="btn btn-danger">Booking</button></a>
          <i class="fa fa-user ml-5"></i>
      </p>
    </div>

      <div class="container-fluid" id="main-content" >
          <div class="row">
              <div class="col-md-8">
                    <div class="container ml-5 p-3" style="background-color: #FFDDDD; border-radius: 20px;">
                        <div class="row">
                          <div class="col-md-4 ml-2">
                <img class="card-img-top " src="../../assets/Camera/desktop.png" height="300"  alt="Card image" >
                          </div>
                          <div class="col-md-7 mr-5" v-if="user" style="margin-top: 6em;">
                                <h3>Hi, {{user.firstName}}</h3>
                                <p>Here you can invite your favourite artist for your different kind of ceremony</p>
                          </div>
                        </div>
                    </div>

                    <!-- main content -->
                    <div class="container mt-4 ml-5">
                      <div class='d-flex '>
                        <h4>Top Songs</h4>
                        <p style="margin-left: 70%;"> <a href="">View All</a></p>
                    </div>
                        <!-- <div class="border border-dark">

                        </div> -->
                    </div>
              </div>
              <div class="col-md-4">

              </div>
          </div>

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
            song: null
        };
    },
    created() {
        this.getUser();
        this.getAllArtist();
        this.AllSong();
        this.id = this.$route.params.id;
    },
    methods: {

      // login user
        getUser() {
            axios.get("http://localhost:8000/getUser")
                .then((res) => {
                  console.log(res.data.data);
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
        },

        AllSong() {
            axios.get("http://localhost:8000/AllSong")
                .then((res) => {
                console.log(res.data);
                this.song = res.data;
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