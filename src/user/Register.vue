<template>
  <div class="container"  style="margin-top: 5em; ">
    <div class="col-sm-5 mx-auto" >
      <h2 class="text-center">Create an account</h2>
      <br />
      <form action="post" enctype="multipart/form-data" @submit.prevent="onCreatePost">
        
        <div class="form-group">
          <input
            type="text"
            v-model="firstName"
            class="form-control border-right-0 shadow-none border-top-0 border-left-0"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            v-model="email"
            class="form-control border-right-0 shadow-none border-top-0 border-left-0"
            id="email"
            placeholder="Enter email"
          />
        </div>
        
        <div class="form-group">
          <input
            type="password"
            name="password"
            v-model="passWord"
            class="form-control border-right-0 shadow-none border-top-0 border-left-0"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div class="mx-5">
          <button
            type="submit"
            name="submit"
            id="continue"
            class="btn btn w-100 mt-2"
          >
            Continue
          </button>
          <br /><br />
          <p class="text-center">--------- OR ---------</p>
        </div>
      </form>
      <div class="mx-5">
        <button id="sign" class="btn btn">
          <i class="fa fa-google"></i>Sign up with google
        </button>
        <p class="mt-5">
          Have an account? 
          <router-link to="/login" style="color: #a10035" >Sign In</router-link>
          <router-link to="/" class="ml-5" style="color: #a10035" >Go back home</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseUrl from "../BaseUrl";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  data() {
    return {
      firstName: " ",
      email: " ",
      passWord: "",
      result:"",
      instance: '',
    };
  },
  methods: {

    

    onCreatePost() {
      const info ={
        firstName : this.firstName,
        email : this.email,
        passWord :this.passWord,
      }
      axios
        .post
            (BaseUrl + "createUser", info)
        .then((res) => {
          const result= res.data.message;    
          toast(result, {
            autoClose: 5000,
          });
          if(res.data.status){
            console.log(res);
            this.$router.push('/login')
            }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    
  },
};
</script>

<style scoped>
#continue {
  background-color: #a10035;
  color: white;
}

#sign {
  background-color: #fedcdc;
  color: black;
  border-style: none;
  background-size: 100%;
  width: 100%;
}

a {
  text-decoration: none;
}
</style>

