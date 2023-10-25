<template>
    <div class="container " align="center" style="margin-top: 5em;  ">
    <div class="col-sm-5" style="border: 1px solid gray; border-style: none;">
    <h2 class=" text-center">Welcome Back</h2><br/>
    <form @submit.prevent="loginPost" method="post">
      <div class="form-group">
        <input type="email" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="email" v-model="email" placeholder="Enter email" name="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="pwd" v-model="passWord" placeholder="Enter password" name="pwd">
      </div> <br/>
      <a href="#" >Forgot Password</a>
      <div class="mx-5">
      <button type="submit" id="continue" class="btn btn w-100 mt-4">Continue</button> <br/><br/>
      <p >Don't have an account? <a href="register" style="color: #A10035;">Sign In</a></p>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
          email: '',
          passWord: '',
    }
  },
  methods:{
    
    loginPost(){    
     const info = {
        email: this.email,
        passWord : this.passWord,
      }

      axios.post("http://localhost:8000/loginUser", info)
      .then ((res)=>{
          if(res.data.status){
            localStorage.setItem("token", res.data.token)
            this.$router.push("/dashboarduser");
          }
      })
      .catch((err)=>{
        console.log(err);
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

<!-- designing of artist interface tomorrow -->


