<template>
    <div class="container "  style="margin-top: 5em;  ">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>
      <div class="col-sm-6" style="margin-left: 25%; ">
          <h1 class="ml-5">Booking</h1>
          <hr class="w-50 ml-4"/>
          <div class="mt-5">
              <h4>Would you like to see musicians similar to your taste?</h4>
              <p> Your inquiry will also be sent to similar musicians. </p>
          </div>

          <div class="row mt-5">
            <div class="col-md-6">
                <button class="btn btn text-light  w-75 " @click="onSend()">Yes, please</button>
            </div>
            <div class="col-md-6">
                <button  id="btn" class="btn btn text-dark w-75 ">No, thanks</button>
            </div>
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
            const loginUser = {
              userName:this.userName,
              userEmail:this.userEmail
            }
            const bookingInfo = JSON.parse(localStorage.getItem('users'));
            console.log(bookingInfo);
              
            axios
                 .get(
                   "http://localhost:8000/bookingInfo", {...bookingInfo, ...loginUser})
                 .then((res) => {
                   console.log(res);
                            //  this.$router.push('/bookingten')
                 })
                 .catch((err) => {
                   console.log(err);
                 });
        }
    }

}
</script>

<style scoped>

#btn{
    background-color:#FECDCD !important;
}

button{
      background-color: #A10035;
  }

</style>