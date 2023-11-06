<template>
      <UserSideBar/>
      <div class="main-content">
          <div class="container">
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
      </div>
</template>

<script>
import axios from 'axios';
import UserSideBar from '../UserSideBar.vue'
export default {
  components: { UserSideBar },
  data(){
      return{
          users: null
      }
    },
    created(){
        this.getDjs();
    },
    methods: {
      
       getDjs(){
        axios.get("http://localhost:8000/getDjs")
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
.main-content{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: auto;
    overflow-x: visible;
  }
</style>