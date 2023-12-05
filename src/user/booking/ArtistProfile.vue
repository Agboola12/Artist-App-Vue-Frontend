<template>
    <UserSideBar/>
        <div class="container-fluid" style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
            <div  class="row" v-if="user">
                <div class="col-md-4">
                <div class="mt-5 ">
                    <!-- <i class="fa fa-heart text-right"></i> -->
                    <img :src="user.imageUrl" alt="cover" class="ml-2" width="400" height="400" style="border-radius: 20px;"/> 
                    <div class="mt-5 ml-4">
                            <p><i class="fs-1 mt-2  fa fa-user mr-2"></i>{{user.firstName}}</p>
                            <p><i class="fs-1 mt-2  glyphicon glyphicon-headphones mr-2"></i>{{user.musicType}}</p>
                            <p><i class="fs-1 mt-2  fa fa-message mr-2"></i>{{user.email}}</p>
                            <p><i class="fs-1 mt-2  glyphicon glyphicon-earphone mr-2"></i>{{user.mobile}}</p>
                            <p><i class="fs-1 mt-2  fa fa-map-marker mr-2"></i>{{user.state}}, {{ user.country }}</p>
                    </div>
                            <button @click="hireMe()" class="btn btn mt-3  p-3 hire"><b>Hire Me</b></button>
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
                                        <a class="nav-link active" style="color:#A10035 ;" href="#about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style="color:grey;" href="#photos">Photos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style="color:grey ;" href="#videos">Videos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style="color:grey ;" href="song">Song List</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style="color:grey ;" href="genre">Genre</a>
                                    </li>
                                </ul>
                        </nav>
                        </div>
                        <hr/>
                        <!-- About -->
                        <div>
                            <h4  id="about" class="title">About</h4>
                            <p>I am {{user.firstName}}, a passionate and talented wedding musician with a deep love for creating beautiful
                                music. Growing up in a musicial family. I began singing and playing instruments a young age...
                            </p>
                            <p><i class="fa fa-user mr-2"></i>{{user.artistType}}</p>
                            <p><i class="fa fa-music mr-2"></i>{{user.musicType}}</p>
                            <p><i class="fa fa-map-marker mr-2"></i>{{ user.state }}, {{ user.country }}</p>
                            <p><i class="fa fa-usd mr-2"></i>3,000,000</p>
                        </div>
                    </div>
                        <!-- photos -->
                        <div>
                            <h4 id="photos" class="title">Photos</h4>
                            <!-- {{ this.artistId }} -->
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
                            <h4 id="videos" class="title">Vidoes</h4>
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
                            <h4 id="song" class="title">Song Lists</h4>
                            <div id="list" v-if="musics.length > 0">
                                <div class=' shadow p-3 mb-5 d-flex m-2' v-for="(song, index) in musics" :key="index" id="song">
                                   <p>0{{ index + 1 }}.</p>
                                   <img :src="song.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
                                   <p class="ml-4 mr-4"> {{ song.songTitle }}</p>
                                   <audio  controls> <source :src="song.mp3Url" type="audio/mpeg" ></audio>
                                </div>
                            </div>
                            <p v-else> Song is yet  to be uploaded.</p>
                        </div>
                        <!-- Genre -->
                        <div class="mt-3">
                            <h4 id="genre" class="title">Genre</h4>
                            <p>Afro Beat, High life.</p>
                        </div>
                        <!-- Event types -->
                        <div>
                            <h4 id="title" class="title">Event Type</h4>
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
import BaseUrl from "../../BaseUrl.js"


export default {
    components: { UserSideBar },
    props:['artistId'],
    data(){
    return{
        musicId: '',
        artistName: '',
        user: null,
        musics: null,
        userName: '',
        userEmail:''
    }
  },
  created(){
        this.getArtistDetails();
        this.getLoginUser();
  },
  methods:{
    getArtistDetails(){    
      axios.get
            (BaseUrl + "getArtistDetails/"+ this.artistId)
    //   ("http://localhost:8000/getArtistDetails/"+ this.artistId)
      .then ((res)=>{
            console.log(res.data);
            this.musicId = res.data.user.id
            this.artistName = res.data.user.firstName
            this.user = res.data.user
            this.musics = res.data.musics
      })
      .catch((err)=>{
        console.log(err);
      })
    },

    // loginuser
      getLoginUser() {
            axios.get
            (BaseUrl + "getUser")
            // ("http://localhost:8000/getUser")
                .then((res) => {
                    console.log(res.data.data);
                this.userName = res.data.data.firstName;
                this.userEmail = res.data.data.email;
            })
                .catch((error) => {
                console.error(error);
            });
        },

    async  hireMe(){
            const loginUser = {
              userName:this.userName,
              userEmail:this.userEmail,
              musicId: this.musicId,
              artistName: this.artistName
            }
            const bookingInfo = JSON.parse(localStorage.getItem('users'));
            console.log(bookingInfo);
            
            axios.post
                    (BaseUrl + "bookingInfo", {...bookingInfo, ...loginUser})
                    //  "http://localhost:8000/bookingInfo", {...bookingInfo, ...loginUser})
                 .then((res) => {
                    const result= res.data.message;    
                      alert(result);
                    if(res.data.status){
                        console.log(res.data);
                         alert('You have hire' + " "+ res.data.response.artistName)
                         this.router.push('/homeuser')
                     }
                 })
                 .catch((err) => {
                   console.log(err);
                 });
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
        /* background-color: #FFCECE; */
        margin-top: 2em;
        border-radius: 20px;
    }
    
    #list :hover{
        background-color: #FFCECE;
    }

    video{
        height: 30vh;
    }

    #title{
        font-size: 2em;
        font-weight: bolder;
    }

    .hire{
        border: 3px solid #A10035;
        color: #A10035;
        font-size: 20px;
        margin-left: 35%;
    }
    .hire:hover{
        background:  #A10035;
        color: white;
    }

</style>