<template>
       <UserSideBar/> 
      <div class="container-fluid mt-4" id="main-content" >
          <div class="row">
              <div class="col-md-7 ml-4" >
                    <div class="container  p-3" style="background-color: #FFDDDD; border-radius: 20px; width: auto;">
                        <div class="row">
                          <div class="col-md-4 ml-2">
                <img class="card-img-top " src="../../assets/Camera/desktop.png" height="300"  alt="Card image" >
                          </div>
                          <div class="col-md-7 mr-5" v-if="user" style="margin-top: 6em;">
                                <h3>Hi, {{user.firstName}}</h3>
                                <p>Here you can invite your favourite artist for your <br/>different kind of ceremony</p>
                          </div>
                        </div>
                    </div>

                    <!-- main content -->
                    <div class="container mt-4 mb-5" style="width: auto;">
                      <div class='d-flex '>
                        <h4>Top Songs</h4>
                        <p id="ppa" style="margin-left: 70%;"><router-link to="/allsong">View All</router-link></p>
                    </div>
                        <div v-if="songs.length>0">
                        <div class=' shadow-sm p-3 mb-5 d-flex m-2' v-for="(song, index) in songs" :key="index" id="song">
                          <p>0{{ index + 1 }}.</p>
                          <img :src="song.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
                          <p class="ml-4 mr-4"> {{ song.songTitle }}</p>
                          <audio  controls> <source :src="song.mp3Url" type="audio/mpeg" ></audio>
                        </div>
                      </div>
                      <div v-else>
                      <p>Song is Yet to be uploaded </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 offset-1">
                    <h4 class="mb-4 ">Top Songs</h4>
                    <div v-if="songs.length > 0">
                    <div class="shadow-sm p-2 jumbotron" v-for="(song, index) in songs" :key="index" >
                      <small class="d-flex">
                        <p>0{{ index + 1 }}.</p>
                        <img :src="song.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
                        <h5 class="ml-4"> {{ song.artistName }}</h5>
                      </small>
                      <p class="text-center"> {{ song.songTitle }}</p>
                    </div>
                    </div>
                    <div v-else>
                      <p>Song is Yet to be uploaded </p>
                    </div>
                    <div class="mt-5 ">
                      <div class='d-flex '>
                        <h4>Popular Artist</h4>
                        <p id="ppa" style="margin-left: 25%;"> <router-link to="/allartist">View All</router-link></p>
                    </div>
                    <div v-if="artists.length>0">
                      <div class="row">
                          <div class="col-md-4 mx-auto" v-for="(artist, index) in artists" :key="index">
                            <div class="card h-50 border-0">
                              <img class="card-img-top" :src="artist.imageUrl" alt="image" >
                              <div class="card-body">
                                <small class="card-title">{{ artist.firstName }}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-else><p>Artist is yet to sign Up to the site</p></div>
                    </div>
                   </div>
          </div>

     

    </div>
</template>

<script>
import axios from 'axios';
import UserSideBar from '../UserSideBar.vue';
import BaseUrl from "../../BaseUrl.js"

  export default {
    data() {
        return {
            user: null,
            id: "",
            artists: [],
            songs: []
        };
    },
    created() {
        this.getUser();
        this.popularArtist();
        this.popularSong();
        this.id = this.$route.params.id;
    },
    methods: {

      // login user
        getUser() {
            axios.get
                    (BaseUrl + "getUser")
            // ("http://localhost:8000/getUser")
                .then((res) => {
                  console.log(res.data.data);
                this.user = res.data.data;
            })
                .catch((error) => {
                console.error(error);
            });
        },

        // getting the popularArtist
        popularArtist() {
            axios.get
                    (BaseUrl + "popularArtist")
            // ("http://localhost:8000/popularArtist")
                .then((res) => {
                console.log(res.data);
                this.artists = res.data;
            });
        },

        popularSong() {
            axios.get
            (BaseUrl + "popularSong")
            // ("http://localhost:8000/popularSong")
                .then((res) => {
                console.log(res.data.data);
                this.songs = res.data.data;
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
  
  #song{
    border-radius: 20px;
  }
  
  #song:hover{
    background-color: #FFDDDD;
  }

  #ppa a{
    color: #df0e0e;
    text-decoration: none;
  }
  



</style>