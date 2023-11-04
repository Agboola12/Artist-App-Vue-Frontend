<template>
  <UserSideBar/>
  <div class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-md-4">

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
          user: null
      }
    },
    created(){
        this.getDjs();
    },
    methods: {
       getDjs(){
        axios.get("http://localhost:8000/getDjs")
          .then((res) => {
            console.log(res.data);
            // this.user = res.data.data;
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