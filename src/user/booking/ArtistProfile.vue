<template>
    <UserSideBar/>
        <div class="container-fluid row">
            <div class="col-md-4">
                <div class="mt-5 ">
                    <i class="fa fa-heart text-right"></i>
                    <img src="../assets/Camera/04.jpg" width="400px"/>             
                    <div class="mt-3">
                            <p><i class="fa fa-user mr-2"></i>Artiste</p>
                            <p><i class="fa fa-map-marker mr-2"></i>Lagos</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card ">
                    <div class="card-body mt-3">
                        <div class="text-center">
                            <button id="bttn" class="mr-3 fs-5 btn btn"> <i class="fa fa-flag text-light"></i></button>
                            <button id="bttn" class="mr-3 fs-5 btn btn text-light"> Availability</button>
                        </div><br/>
                        <div>
                            <nav >
                                <ul class="nav justify-content-center">
                                    <li class="nav-item">
                                        <a class="nav-link active" style="color:#A10035 ;" href="#">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style="color:grey;" href="#">Photos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style="color:grey ;" href="#">Videos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style="color:grey ;">Song List</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style="color:grey ;">Genre</a>
                                    </li>
                                </ul>
                        </nav>
                        </div>
                        <hr/>
                        <!-- About -->
                        <div>
                            <h4>About</h4>
                            <p>I am Emmanuel, a passionate and talented wedding musician with a deep love for creating beautiful
                                music. Growing up in a musicial family. I began singing and playing instruments a young age...
                            </p>
                            <p><i class="fa fa-user mr-2"></i>Artiste</p>
                            <p><i class="fa fa-map-marker mr-2"></i>Lagos</p>
                            <p><i class="fa fa-usd mr-2"></i>3,000,000</p>
                        </div>
                        <!-- photos -->
                        <div>
                            <h4>Photos</h4>
                            {{ this.artistId }}
                            <div class="row">
                            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"
                                />

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp" class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape"
                                />
                            </div>

                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp" class="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds"
                                />

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"
                                />
                            </div>

                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp" class="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea"
                                />

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp" class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park"
                                />
                            </div>
                            </div>
                        </div>

                        <!-- Videos -->
                        <hr/>
                        <div>
                            <h4>Vidoes</h4>
                            <div class="row">
                            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <video src="../assets/video/elijah.mp4" controls  class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
                                
                                <video src="../assets/video/elijah.mp4" controls  class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
                            </div>

                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <video src="../assets/video/elijah.mp4" controls  class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
                                
                                <video src="../assets/video/elijah.mp4" controls  class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
                            </div>

                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <video src="../assets/video/elijah.mp4" controls  class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
                                
                                <video src="../assets/video/elijah.mp4" controls  class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water"></video>
                            </div>
                            </div>
                        </div>

                        <!-- Songs -->
                        <div>
                            <h4>Song Lists</h4>
                            <div id="list">
                                <div class=' shadow-sm p-3 mb-5 d-flex m-2' v-for="(song, index) in musics" :key="index" id="song">
                                   <p>0{{ index + 1 }}.</p>
                                   <img :src="song.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
                                   <p class="ml-4 mr-4"> {{ song.songTitle }}</p>
                                   <audio  controls> <source :src="song.mp3Url" type="audio/mpeg" ></audio>
                                </div>


                                <div class="row">
                                    <div class="col-md-4 offset-1 mt-3">
                                        <audio controls> <source src="../assets/audio/wale.mp3" type="audio/mpeg" ></audio>
                                    </div>
                                    <div class="col-md-4 offset-1 mt-3">
                                        
                                        <audio controls> <source src="../assets/audio/wale.mp3" type="audio/mpeg" ></audio>
                                    </div>
                                    <div class="col-md-4 offset-1 mt-3">
                                       
                                        <audio controls> <source src="../assets/audio/wale.mp3" type="audio/mpeg" ></audio>
                                    </div>
                                    <div class="col-md-4 offset-1 mt-3">
                                        
                                        <audio controls> <source src="../assets/audio/wale.mp3" type="audio/mpeg" ></audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Genre -->
                        <div class="mt-3">
                            <h4>Genre</h4>
                            <p>Afro Beat, High life.</p>
                        </div>
                        <!-- Event types -->
                        <div>
                            <h4>Event Type</h4>
                            <p>Wedding reception, After party.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import UserSideBar from '../UserSideBar.vue';

export default {
    components: { UserSideBar },
    props:['artistId'],
    data(){
    return{
        user: null,
        musics: null

    }
  },
  created(){
        this.getArtistDetails();
  },
  methods:{
    getArtistDetails(){    
      axios.get("http://localhost:8000/getArtistDetails/"+ this.artistId)
      .then ((res)=>{
            console.log(res.data);
            this.user = res.data.user
            this.musics = res.data.musics
      })
      .catch((err)=>{
        console.log(err);
      })
    },
}
}
</script>

<style scoped>
     #bttn{
        background-color: #A10035;
        border-radius: 15px;
    }

    #list{
        background-color: #FFCECE;
        border-radius: 20px;
    }

    video{
        height: 30vh;
    }

</style>