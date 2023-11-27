<template>
    <div class="container bod"  style="margin-top: 2em;  ">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn home  ">Go Back Home</button></a>

        <div class="container mt-4 mb-5"  style="width: auto;">
                <h2 class="text-center"><b>Your Choice Artist</b></h2>
            <div class=' shadow-sm p-3 mt-5 mb-5 d-flex m-2'  v-for="(user, index) in users" :key="index" id="song">
              <p>0{{ index + 1 }}.</p>
              <img :src="user.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
              <p class="ml-4 mr-5">Name <br/><br/> {{ user.firstName }}</p>
              <p class="ml-4 mr-5">Email <br/><br/> {{ user.email }}</p>
              <p class="ml-4 mr-5">Mobile Number <br/><br/> {{ user.mobile }}</p>
               <button  class="border-0 btn btn" @click="Artistprofile(user.id)"><a id="bttt" href="">Check Profile</a></button> 
            </div>
        </div>

       </div>
</template>

<script>
import axios from 'axios';
import BaseUrl from "../../BaseUrl.js"

export default {

    data(){
        return{
            // userName: '',
            // userEmail: '',
            users: null
        }
    },
    created(){
        this.onSend();
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
                 .post
                  (BaseUrl + "getBookingInfo",bookingInfo)
                  //  "http://localhost:8000/getBookingInfo",bookingInfo)
                 .then((res) => {
                   console.log(res.data.user);
                   this.users = res.data.user
                 })
                 .catch((err) => {
                   console.log(err);
                 });
        },

        Artistprofile(id){
            this.$router.push('/artistprofile/'+id)
        }
    }

}
</script>

<style scoped>

.bod{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#song:hover{
    background-color: #FFDDDD;
    border-radius: 20px;
  }

  .home{
    background: #A10035;
    color: white;
  }

  #bttt{
    color: #A10035;
    font-size: large;
  }
  

</style>