<template>
    <div class="container "  style="margin-top: 5em;  ">
        <!-- <router-link to="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></router-link> -->
          <form action="post" enctype="multipart/form-data" @submit.prevent="onSend" class="col-sm-5" style="margin-left: 25%; ">
              <h1 class="ml-5">Booking</h1>
              <hr class="w-50 ml-4"/>
              <div class="mt-4">
                  <h4>Where is your event wedding taking place?</h4>
                  <p>Please be specific (e.g venue: lawrence street No 24) so the musicians can send you accurate quotes</p>
                     <input type="search" class="form-control" v-model="country" placeholder="USA"/>
              </div>

              <div class="mt-4">
                  <h4>Where is the state is event taken place?</h4>
                     <input type="text" class="form-control" v-model="state" placeholder="Abuja"/>
              </div>

              <div class="mt-4">
                  <h4>What is your address?</h4>
                     <input type="text" class="form-control" v-model="address" placeholder="Lane 12"/>
              </div>

              <div class="mt-3 text-center">
                  <button class="btn btn text-light  w-50 m-2 ">Next</button>
                  <!-- <button class="btn btn text-light  w-25 m-2 "><a href="bookingfive">Next</a></button> -->
              </div>
           </form> 
           </div>  
  </template>
  
  <script>
  export default {
    data(){
        return{
            state: '',
            country: '',
            address:'',

        }
    },
    created(){

    },
    methods:{

        onSend(){
            let getUsers = localStorage.users?JSON.parse(localStorage.getItem ("users")):{};
            localStorage.setItem('users', JSON.stringify({...getUsers,state:this.state, country:this.country, address:this.address}))
           this.$router.push('/bookingfive')
        }

    }
  
  }
  </script>
  
  <style scoped>
      button{
          background-color: #A10035;
      }
  </style>