<template>
  <UserSideBar/>
  <div class="main-content container">
            <div class="row">
              <div v-if="users.length>0">
                <h2 class="text-center">All Music Artists</h2>
                <div class="col-md-3 mt-2" v-for="(user, index) in users" :key="index">
                  <img class="card-img-top w-100" :src="user.imageUrl" alt="Card image" height="200" >
                  <div class="card-body">
                    <h4 class="card-title">{{ user.firstName }}</h4>
                    <p class="card-text">{{user.musicType}}</p>
                  </div>
                </div>
              </div>
              <div v-else>
                  <p>Artists is Yet to be uploaded </p>
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
    data(){
      return{
          users: []
      }
    },
    created(){
        this.getMusicArtist();
    },
    methods: {

      getMusicArtist(){
        axios.get
        (BaseUrl + "getMusicArtist")
        // ("http://localhost:8000/getMusicArtist")
          .then((res) => {
            console.log(res.data.data);
            this.users = res.data.data;
          })
          .catch((error) => {
            console.error(error);
          });
       }
    }
}
</script>

<style scoped>

#main-content{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: auto;
    overflow-x: visible;
  }
</style>