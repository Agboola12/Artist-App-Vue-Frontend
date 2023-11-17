<template>
    <div class="container  shadow p-4" style="margin-top: 2em; font-family: Verdana, Geneva, Tahoma, sans-serif;">
      <div class="col-sm-6" style="margin-left: 30%;">
        <form action="post" enctype="multipart/form-data" @submit.prevent="onCreatePost">
          <h2 class="text-center mb-5">Create an account for Artist</h2>
          
          <div class="form-group">
            <input
              type="text"
              name="firstName"
              v-model="firstName"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="firstName"
              placeholder="Enter Your Name"
            />
            <p v-if="errors.firstName">{{ errors.firstName }}</p>
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              v-model="email"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="email"
              placeholder="Enter Your email"
            />
            <p v-if="errors.email">{{ errors.email }}</p>
          </div>
          <div class="form-group">
            <select class="form-select border-right-0 shadow-none border-top-0 border-left-0"  v-model="musicType" name="musicType">
              <option  disabled value="Rock">Select Your Music Type</option>
              <option value="Music Artist">Music Artist</option>
              <option value="Bands">Bands</option>
              <option value="Djs">Djs</option>
            </select>
            <p v-if="errors.musicType">{{ errors.musicType }}</p>
          </div>
          
          <div class="form-group">
            <input
              type="number"
              name="mobile"
              v-model="mobile"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="mobile"
              placeholder="Enter Your Mobile Number"
              />
              <p v-if="errors.mobile">{{ errors.mobile }}</p>
            </div>

            <div class="form-group">
              <input
              type='text'
              name="state"
              v-model="state"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="state"
              placeholder="Enter Your State"
              />
              <p v-if="errors.state">{{ errors.state }}</p>
            </div>
            
            <div class="form-group">
              <input
              type='text'
              name="country"
              v-model="country"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="country"
              placeholder="Enter Your Country"
              />
              <p v-if="errors.country">{{ errors.country}}</p>
            </div>
            
          <div class="form-group">
            <input
              type="file"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              ref="imageInput" 
              @change="handleImageChange"
              id="image"
            />
              <p v-if="errors.image">{{ errors.image}}</p>
            </div>
            
          <div class="form-group">
            <input
              type="password"
              name="passWord"
              v-model="passWord"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="passWord"
              placeholder="Enter Your password"
            />
            <p v-if="errors.passWord">{{ errors.passWord}}</p>
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

      validateForm() {
      this.errors = {};

      if (!this.firstName) {
        this.errors.name = 'Name is required';
      }
      if (!this.email) {
        this.errors.email = 'Email is required';
      }
      if (!this.musicType) {
        this.errors.musicType = 'Music Type is required';
      }
      if (!this.mobile) {
        this.errors.mobile = 'Mobile is required';
      }
      if (!this.state) {
        this.errors.state = 'State is required';
      }
      if (!this.country) {
        this.errors.country = 'Country is required';
      }
      if (!this.image) {
        this.errors.image = 'Image is required';
      }
      if (!this.passWord) {
        this.errors.passWord = 'Password is required';
      }
      return Object.keys(this.errors).length === 0;
    },

     handleImageChange (event){
        this.image = event.target.files[0] ;
    },
        
        onCreatePost() {
          if (this.validateForm()) {
            
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
      } 
      else {
        console.log('Form has errors. Please fix them.');
      }
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
  
  