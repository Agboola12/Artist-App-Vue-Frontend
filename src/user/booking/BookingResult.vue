<template>
    <div class="container "  style="margin-top: 5em;  ">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>

        <div class="container mt-4 mb-5" style="width: auto;">
          <div class='d-flex '>
            <h4>Top Songs</h4>
            <p id="ppa" style="margin-left: 70%;"> <a href="allsong">View All</a></p>
        </div>
            <div class=' shadow-sm p-3 mb-5 d-flex m-2' v-for="(song, index) in songs" :key="index" id="song">
              <p>0{{ index + 1 }}.</p>
              <img :src="song.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
              <p class="ml-4 mr-4"> {{ song.songTitle }}</p>
              <audio  controls> <source :src="song.mp3Url" type="audio/mpeg" ></audio>
            </div>
        </div>

       </div>
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return{
            // userName: '',
            // userEmail: '',
            user: null
        }
    },
    created(){
        // this.getLoginUser();
    },
    methods:{

      // login user
    //   getLoginUser() {
    //         axios.get("http://localhost:8000/getUser")
    //             .then((res) => {
    //                 console.log(res.data.data);
    //             this.userName = res.data.data.firstName;
    //             this.userEmail = res.data.data.email;
    //         })
    //             .catch((error) => {
    //             console.error(error);
    //         });
    //     },

      async  onSend(){
            // const loginUser = {
            //   userName:this.userName,
            //   userEmail:this.userEmail
            //    "http://localhost:8000/bookingInfo", {...bookingInfo, ...loginUser})
            // }

            const bookingInfo = JSON.parse(localStorage.getItem('users'));
            console.log(bookingInfo);
              
            axios
                 .post(
                   "http://localhost:8000/getBookingInfo",bookingInfo)
                 .then((res) => {
                   console.log(res.data.user);
                   this.user = res.data.user
                 })
                 .catch((err) => {
                   console.log(err);
                 });
        }
    }

}
</script>

<style scoped>


</style>