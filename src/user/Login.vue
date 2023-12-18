<template>
    <div class="container" style="margin-top: 5em;">
    <div class="col-sm-5 mx-auto" >
      <form @submit.prevent="loginPost" method="post">
        <h2 class=" text-center">Welcome Back</h2><br/>
      <div class="form-group">
        <input type="email" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="email" v-model="email" placeholder="Enter email" name="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="pwd" v-model="passWord" placeholder="Enter password" name="pwd">
      </div> <br/>
      <a href="#" >Forgot Password</a>
      <div class="mx-5">
      <button type="submit" id="continue" class="btn btn w-100 mt-4" :disabled="isLoading">Continue</button> <br/><br/>
      <button 
      Don't have an account? 
          <router-link to="/register" style="color: #a10035" >Sign Up</router-link>
          <router-link to="/" class="ml-5" style="color: #a10035" >Go back home</router-link>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import BaseUrl from "../BaseUrl.js"
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  data(){
    return{
          email: '',
          passWord: '',
          result: '',
          setResult: {},
          isLoading: false
    }
  },
  created() {
  },
  methods:{

    loginPost(){    
     const info = {
        email: this.email,
        passWord : this.passWord,
      }
      this.isLoading=true
      axios.post
              (BaseUrl + "loginUser", info)
      .then ((res)=>{             
        if(res.data.status){
        const result= res.data.message;    
          toast(result, {
            autoClose: 9000,
          }); 
          localStorage.setItem("token", res.data.token)
          this.$router.push("/homeuser");
        }
      })
      .catch((err)=>{
        console.log(err);
        alert(err.message)
      }).finally(()=>{
          this.isLoading = false;
        })
    },
}
}
</script>

<style scoped>

#continue{
background-color: #A10035;
color: white;
}

#sign{
background-color: #FEDCDC;
color: black;
border-style:none;
background-size: 100%;
width: 100%;
}

a{
text-decoration: none;
}


</style>



