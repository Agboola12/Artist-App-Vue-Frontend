<template>
    <div class="container "  style="margin-top: 2em;  ">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>

        <div class="container mt-4 mb-5"  style="width: auto;">
                <h2 class="text-center"><b>Your Choice Artist</b></h2>
            <div class=' shadow-sm p-3 mt-5 mb-5 d-flex m-2' v-for="(user, index) in users" :key="index" id="song">
              <p>0{{ index + 1 }}.</p>
              <img :src="user.imageUrl" alt="cover" class="ml-4" width="50" height="50" style="border-radius: 50px;"/> 
              <p class="ml-4 mr-4">Name <br/><br/> {{ user.firstName }}</p>
              <p class="ml-4 mr-4">Email <br/><br/> {{ user.email }}</p>
              <p class="ml-4 mr-4">Mobile Number <br/><br/> {{ user.mobile }}</p>
               <button  class="border-0 btn btn-danger" @click="Artistprofile(user.id)">Check Profile</button> 
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
                 .post(
                   "http://localhost:8000/getBookingInfo",bookingInfo)
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
#song:hover{
    background-color: #FFDDDD;
  }

</style>