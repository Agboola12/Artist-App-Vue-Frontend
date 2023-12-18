<template>
    <div class="container shadow w-75 p-5" style="margin-top: 5em; ">
    <div class="col-sm-5 mx-auto" >
        <form @submit.prevent="loginPost" method="post" >
            <h2 class=" text-center">Welcome Back Artist</h2><br/>
      <div class="form-group">
        <input type="email" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="email" v-model="email" placeholder="Enter email" name="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="pwd" v-model="passWord" placeholder="Enter password" name="pwd">
      </div> <br/>
      <a href="#" >Forgot Password</a>
      <div class="mx-5">
      <button type="submit" id="continue" :disabled="isLoading" class="btn btn  mt-4">Continue</button> <br/><br/>
        Don't have an account? 
        <router-link to="/registerartist" style="color: #a10035" >Sign Up</router-link>
        <router-link to="/" class="ml-4" style="color: #a10035" >Go back home</router-link>
      </div>
    </form>
  </div>
  </div>
  <div class="body w-100 mt-5" id="footer" >
          <FooterArtist/>
        </div>
</template>

<script>
import axios from 'axios'
import FooterArtist from './FooterArtist.vue'
import BaseUrl from "../BaseUrl.js"
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


export default {
    data() {
        return {
            email: '',
            passWord: '',
            isLoading: false
        };
    },
    methods: {
        loginPost() {
            const info = {
                email: this.email,
                passWord: this.passWord,
            };
            this.isLoading=true;
            axios.post
            (BaseUrl+"loginArtist", info)
            // ("http://localhost:8000/loginArtist", info)
                .then((res) => {
                    const result= res.data.message;    
                    toast(result, {
                    autoClose: 5000,
                  });
                    if(res.data.status){
                    localStorage.setItem("token", res.data.token)
                    this.$router.push("/dashboardartist");
                }
            })
                .catch((err) => {
                console.log(err);
            }).finally(()=>{
              this.isLoading = false;
            })
        },
    },
    components: { FooterArtist }
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

.body {
     font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

a{
text-decoration: none;
}


</style>

<!-- designing of artist interface tomorrow -->


