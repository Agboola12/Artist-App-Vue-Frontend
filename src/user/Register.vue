<template>
  <div class="container"  style="margin-top: 5em; ">
    <div class="col-sm-5" style="margin-left: 30%;">
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
          <p>--------- OR ---------</p>
        </div>
      </form>
      <div class="mx-5">
        <button id="sign" class="btn btn">
          <i class="fa fa-google"></i>Sign up with google
        </button>
        <p class="mt-5">
          Have an account? <a href="login" style="color: #a10035">Sign In</a>
          <a href="/" class="ml-5" style="color: #a10035">Go Back Home</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseUrl from "../BaseUrl";
// import 'vue-toast-notification/dist/theme-sugar.css';
// import Toast from 'vue-toast-notification'; 

export default {
  data() {
    return {
      firstName: " ",
      email: " ",
      passWord: "",
      result:"",
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
          // "http://localhost:8000/createUser", info)
        .then((res) => {
          const result= res.data.message;    
        alert(result);
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

