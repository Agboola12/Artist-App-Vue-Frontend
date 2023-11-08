<template>
  <UserSideBar/>
  <div class="container main-content">
      <!-- <div class="container">
        <div class="row">
          <div class="row" >
                    <div class="col-md-3" v-for="(user, index) in users" :key="index">
                      <img class="card-img-top w-100" :src="user.imageUrl" alt="Card image" height="300" >
              <div class="card-body">
                <h4 class="card-title">{{ user.firstName }}</h4>
                <p class="card-text">{{user.musicType}}</p>
              </div>
                    </div>
                  </div>
        </div>

      </div> -->

            <div class="row mt-3">
                <h2 class="text-center">All Band Artists</h2>
                  <div class="col-md-3 mt-4" v-for="(user, index) in users" :key="index">
                    <img class="card-img-top w-100" :src="artist.imageUrl" alt="Card image" height="200" >
                    <div class="card-body">
                         <h4 class="card-title">{{ artist.firstName }}</h4>
                         <p class="card-text">Band</p>
                         <p class="card-text">{{ artist.state}}, {{ artist.country }}</p>
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
    data(){
      return{
          users: null
      }
    },
    created(){
        this.getBands();
    },
    methods: {

      getBands(){
        axios.get("http://localhost:8000/getBands")
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