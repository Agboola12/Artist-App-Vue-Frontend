<template>
    <div class="container  shadow p-4" style="margin-top: 2em;margin-left: 30%;">
      <div class="col-sm-5" style="border: 1px solid gray; border-style: none">
        <h2 class="text-center">Create an account for Artist</h2>
        <br />
        <form action="post" enctype="multipart/form-data" @submit.prevent="onCreatePost">
          <div class="form-group form-floating">
            <input
              type="text"
              name="fname"
              v-model="firstName"
              class="form-control fa fa-user border-right-0 shadow-none border-top-0 border-left-0"
              placeholder="Fullname"
            />
            <label for="">&#128113; Fullname</label>
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
              <!-- <label for="musicType">Select Your Music Type:</label> -->
        <select class="form-select border-right-0 shadow-none border-top-0 border-left-0"  v-model="musicType" name="musicType">
          <option  disabled value="Rock">Select Your Music Type</option>
          <option value="Music Artist">Music Artist</option>
          <option value="Bands">Bands</option>
          <option value="Djs">Djs</option>
        </select>
</div>
          
          <div class="form-group">
            <input
              type="number"
              name="mobile"
              v-model="mobile"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="mobile"
              placeholder="Enter Mobile Number"
            />
          </div>

          <div class="form-group">
            <input
            type='text'
              name="state"
              v-model="state"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="state"
              placeholder="Enter State"
            />
          </div>

          <div class="form-group">
            <input
            type='text'
              name="country"
              v-model="country"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="country"
              placeholder="Enter Country"
            />
          </div>

          <div class="form-group">
            <input
              type="file"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              ref="imageInput" 
              @change="handleImageChange"
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
          <p class="mt-2">
            Have an account? <a href="loginartist" style="color: #a10035">Sign In</a>
          </p>
        </div>
      </div>
    </div>
    <div class="body w-100 mt-5" id="footer" >
        <FooterArtist/>
    </div>
  </template>
  
  <script>
  import axios from "axios";
import FooterArtist from "./FooterArtist.vue";
  
  
  export default {
    data() {
        return {
            firstName: " ",
            email: " ",
            musicType: " ",
            mobile: "",
            state: "",
            country: "",
            image:"null",
            passWord: "",
        };
    },
    methods: {

         handleImageChange (event){
            this.image = event.target.files[0] ;
        },
        
        onCreatePost() {

            const formData = new FormData();
             formData.append("firstName", this.firstName);
             formData.append("email", this.email);
             formData.append("musicType", this.musicType);
             formData.append("mobile", this.mobile);
             formData.append("state", this.state);
             formData.append("country", this.country);
             formData.append("image", this.image);
             formData.append("passWord", this.passWord);

             console.log(formData);
            
            axios
                .post("http://localhost:8000/createArtist", formData)
                .then((res) => {
                console.log(res);
                this.$router.push('/loginartist');
            })
                .catch((err) => {
                console.log(err);
            });
        },
    },
    components: { FooterArtist }
};
  </script>
  
  <style scoped>
  .body {
     font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
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
  
  