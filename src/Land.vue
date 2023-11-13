<template>
        <div class="body">
          <div>
            <header class="shadow-sm" style="border-radius: 20px;" >
                <nav class="navbar navbar-expand-lg navbar-light">
                    <h4 class="navbar-brand" href="#" style="color: #FFDDDD; font-size: 2em;"><b>Prime</b></h4>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav" style="margin-left: 70%;">
                        <li class="nav-item active">
                          <a class="nav-link  text-light" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-light" href="#">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-light" href="register">User</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-light" href="registerartist">Artist</a>
                        </li>
                      </ul>
                </div>
                </nav>

                <div class="row">
                    <div class="col-md-6 text-center ml-5 " style="margin-top: 8em; color: #FFDDDD;">
                        <h1 style="font-weight: bolder; font-size: 3em;">YOU CALL IT </h1> 
                          <h1 style="font-weight: bolder;">MUSIC </h1> 
                            <h3 style="font-weight: bolder; font-size: 2em;"> I CALL IT MY THERAPIST </h3>
                    </div>
                    <div class="image col-md-5">
                        <img src="../src/assets/Camera/background.png" height="500px"  />
                    </div>
                </div>
              </header>

              <div class="container-fluid p-2">
                <h3 class="text-center trending" >Trending</h3>
                <div class="row mt-5">
                  <div class="col-md-7 mx-auto">
                    <div class="row">
                      <h3 class="mb-5">Popular Artist</h3>
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

                    <div class="col-md-4 ">
                      <h3 class="mb-4 ">Top Songs</h3>
                    <div class="shadow-sm p-2 jumbotron" v-for="(song, index) in songs" :key="index" >
                      <small class="d-flex">
                        <p>0{{ index + 1 }}.</p>
                        <img :src="song.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
                        <h3 class="ml-4"> {{ song.artistName }}</h3>
                      </small>
                      <small  class="songtitle"> {{ song.songTitle }}</small>
                    </div>
                     </div>

                </div>

              </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {

  data(){
    return{
        artists: null,
        songs: null
    } 
  },
    created(){
        this.popularArtist();
        this.popularSong();
    },
    methods:{

      popularArtist() {
            axios.get("http://localhost:8000/popularArtist")
                .then((res) => {
                console.log(res.data);
                this.artists = res.data;
            });
        },

        popularSong() {
            axios.get("http://localhost:8000/popularSong")
                .then((res) => {
                console.log(res.data.data);
                this.songs = res.data.data;
            });
        }

    }

}
</script>

<style scoped>
.body{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 4em;
  background-size: cover;
  background-attachment: fixed;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  overflow: hidden;
  height: auto;
  width: 100%;
  background: white;
}

header{
  background: linear-gradient(#A10035, #FFDDDD);
  background-size: cover;
  background-attachment: fixed;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
}

.image:hover{
  transform: scale(1.1);
  transition: all 2s;
}

.trending{
  font-weight: bolder;
  font-size: 3em;
  color: #A10035;
}

.songtitle{
  margin-left: 10em;
}
</style>