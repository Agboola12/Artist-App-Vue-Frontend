<template>
  <UserSideBar/>
  <div class="container main-content">
            <div class="row ">
                <h2 class="text-center">All Band Artist</h2>
                  <div class="col-md-3 mt-3" v-for="(user, index) in users" :key="index">
                    <img class="card-img-top w-100" :src="user.imageUrl" alt="Card image" height="200" >
                    <div class="card-body">
                         <h4 class="card-title">{{ user.firstName }}</h4>
                         <p class="card-text">{{user.musicType}}</p>
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