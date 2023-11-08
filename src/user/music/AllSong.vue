<template>
  <UserSideBar/>
  <div class="main-content">
        <div class="container">
          <h2 class="text-center">All Songs</h2>
            <div class="row mt-3">
                  <div class="col-md-3 mt-4" v-for="(song, index) in songs" :key="index">
                    <img class="card-img-top w-100" :src="song.imageUrl" alt="Card image" height="200" >
                    <div class="card-body">
                      <!-- <p class="card-text">{{song.artistName}}</p> -->
                         <h4 class="card-title">{{ song.firstName }}</h4>
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
  components: { UserSideBar, UserSideBar },

  data() {
      return {
          songs: null,
      };
  },
  created() {
      this.AllSong();
  },
  methods: {
    
      // getting all the song
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