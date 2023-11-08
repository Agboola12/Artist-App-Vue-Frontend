<template>
  <UserSideBar/>
  <div class="main-content">
      <div class="container">
          <div class="row">
              <h2>All Songs</h2>
              <!-- <div class=' shadow p-3 mb-5 d-flex m-2 ' v-for="(song, index) in songs" :key="index" id="song">
                <p>0{{ index + 1 }}.</p>
                <img :src="song.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
                <p class="ml-4 mr-4"> {{ song.songTitle }}</p>
                <audio  controls> <source :src="song.mp3Url" type="audio/mpeg" ></audio>
              </div> -->
              
                <div class="col-md-3" v-for="(song, index) in songs" :key="index">
                  <img class="card-img-top w-100" :src="song.imageUrl" alt="Card image" height="200" >
                  <div class="card-body">
                       <h4 class="card-title">{{ song.songTitle }}</h4>
                       <p class="card-text">Band</p>
                   </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import UserSideBar from '../UserSideBar.vue'
export default {
  components: { UserSideBar },

  data() {
      return {
          songs: null,
      };
  },
  created() {
      this.AllSong();
  },
  methods: {
    
      // getting all the artist
      AllSong() {
          axios.get("http://localhost:8000/AllSong")
              .then((res) => {
              console.log(res.data.data);
              this.songs = res.data.data;
          });
      }
  },
      


}
</script>
<style scoped>
.main-content{
font-family: Verdana, Geneva, Tahoma, sans-serif;
height: auto;
overflow-x: visible;
}

#song{
    border-radius: 20px;
  }
  
  #song:hover{
    background-color: #A10035;
    color: white;
  }
</style>