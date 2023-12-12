<template>
        <div class="whole">
        <div class="body">
        
            <header class="shadow-sm" style="border-radius: 20px;" >
                <nav class="navbar navbar-expand-lg navbar-light">
                    <h4 class="navbar-brand" href="#" style="color: #FFDDDD; font-size: 2em;"><b>Prime</b></h4>
                    <button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="sab">
                       <ul class="navbar-nav list-line ml-auto">               
                        <li class="nav-item active">
                          <a class="nav-link  text-light" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-light" href="#">About</a>
                        </li>
                        <li class="nav-item">
                          <router-link to="/register" class="nav-link text-light">User</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/registerartist" class="text-light nav-link">Artist</router-link>
                        </li>
                      </ul>
                    </div>
                </nav>

                <div class="row">
                    <div class="col-md-6 text-center" style="margin-top: 10em ;color: #FFDDDD;">
                        <h1 style="font-weight: bolder; font-size: 3em;">YOU CALL IT </h1> 
                          <h1 style="font-weight: bolder;">MUSIC </h1> 
                            <h3 style="font-weight: bolder; font-size: 2em;"> I CALL IT MY THERAPIST </h3>
                            <p>Without music, life would be a mistake</p>
                    </div>
                    <div class="image col-md-6">
                        <img src="../src/assets/Camera/background.png"  height="500px"  />
                    </div>
                </div>
              </header>

              <div class="container mt-5">
                <h3 class="text-center trending" >Trending</h3>
                <div class="row mt-5">
                  <div class="col-md-7 mx-auto">
                    <div class="row" v-if="artists">
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
                      <div v-else> <p class="text-center">No Artist has been created</p></div>
                    </div> 
                    <div class="col-md-4" v-if="songs">
                      <h3 class="mb-4 ">Top Songs</h3>
                    <div class="shadow-sm p-2 jumbotron w-100" v-for="(song, index) in songs" :key="index" >
                      <small class="d-flex">
                        <p>0{{ index + 1 }}.</p>
                        <img :src="song.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
                        <h3 class="ml-4"> {{ song.artistName }}</h3>
                      </small>
                      <small class="songtitle"> {{ song.songTitle }}</small>
                    </div>
                     </div>
                     <div v-else>
                          <p class="text-center">No Song has been Uploaded</p>
                     </div>
                </div>
              </div>
              </div>

             <div class="container-fluid mt-5">
                 <div class="row single p-5">
                    <div class="col-md-4 text-center mt-5" style="text-align: center;" >
                        <h2 class="text-center">
                          The only thing that's better in a group versus being by yourself is the companionship
                        </h2>
                    </div>
                    <div class="col-md-5 text-center">
                      <img src="../src/assets/Camera/sing.png" class="w-50" />
                    </div>
                 </div> 
                 
                 <div class="d-flex" style="margin-top: 7em;">
                    <div class="text " style=" text-align: center;" >
                        <h2>
                            “Band may be hard work, but it's worth it when we see the crowd on their feet.”
                        </h2>
                    </div>
                    <div class="mt-3 text-center">
                      <img src="../src/assets/Camera/band.png" class="w-75"  />
                    </div>
                  </div> 
                
                <div class=" mt-5 p-5">
                  <div class="row">
                    <div class="col-md-4 " style="margin-top: 6 em; text-align: center;" >
                      <h2>
                        I think music in itself is healing. 
                      </h2>
                    </div>
                    <div class="col-md-5">
                      <img src="../src/assets/Camera/dj.jpg" class="w-50"  />
                    </div>
                  </div> 
                </div>
              </div> 

              <div class=" w-100 mt-5" >
                <FooterArtist/>
              </div>
        </div>


</template>

<script>
import axios from 'axios';
import FooterArtist from './artist/FooterArtist.vue';
import BaseUrl from './BaseUrl';
// import BaseUrl from './BaseUrl';
export default {
  components: { FooterArtist },

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

    }

}
</script>

<style scoped>

.whole{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.body{
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

/* .songtitle{
  margin-left: 10em;
} */

.single{
  background: #FFDDDD;
}

@media only screen and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
}
@media only screen and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px){
    .text{
      margin-top: 4r;
    }
}
</style>