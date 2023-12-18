<template>
  <UserSideBar/>
  <div class="container main-content">
            <div class="row ">
                <h2 class="text-center">All Band Artist</h2>
                <div v-if="users.length>0">
                  <div class="col-md-3 mt-3" v-for="(user, index) in users" :key="index">
                    <img class="card-img-top w-100" :src="user.imageUrl" alt="Card image" height="200" >
                    <div class="card-body">
                      <h4 class="card-title">{{ user.firstName }}</h4>
                      <p class="card-text">{{user.musicType}}</p>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <p>Artist is Yet to be uploaded </p>
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
        this.getBands();
    },
    methods: {

      getBands(){
        axios.get
                (BaseUrl + "getBands")
        // ("http://localhost:8000/getBands")
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