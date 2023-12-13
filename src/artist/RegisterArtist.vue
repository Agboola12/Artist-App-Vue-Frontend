<template>
    <div class="container  shadow p-4" style="margin-top: 2em; font-family: Verdana, Geneva, Tahoma, sans-serif;">
      <div class="col-sm-6 mx-auto" >
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
            <!-- <p v-if="errors.firstName">{{ errors.firstName }}</p> -->
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
            <!-- <p v-if="errors.email">{{ errors.email }}</p> -->
          </div>
          <div class="form-group">
            <select class="form-select border-right-0 shadow-none border-top-0 border-left-0"  v-model="artistType" name="musicType">
              <option  disabled value="Rock">Select Your Artist Type</option>
              <option value="Music Artist">Music Artist</option>
              <option value="Bands">Bands</option>
              <option value="Djs">Djs</option>
            </select>
            <!-- <p v-if="errors.artistType">{{ errors.artistType }}</p> -->
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
              <!-- <p v-if="errors.mobile">{{ errors.mobile }}</p> -->
            </div>

            <div class="form-group">
            <select name="cars" class="form-select border-right-0 shadow-none border-top-0 border-left-0"  v-model="musicType">
              <option  disabled value="Rock">What type music do you sing?</option>
              <option value="afroBeat">Afro Beat</option>
              <option value="hipPop">HipPop</option>
              <option value="gospel">Gospel</option>
            </select>
            <!-- <p v-if="errors.musicType">{{ errors.musicType }}</p> -->
            </div>

            <div class="form-group">
              <input
              type='text'
              name="state"
              v-model="state"
              required
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="state"
              placeholder="Enter Your State"
              />
              <!-- <p v-if="errors.state">{{ errors.state }}</p> -->
            </div>
            
            <div class="form-group">
              <input
              type='text'
              required
              name="country"
              v-model="country"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="country"
              placeholder="Enter Your Country"
              />
              <!-- <p v-if="errors.country">{{ errors.country}}</p> -->
            </div>
            

          <div class="form-group">
            <input
              required
              type="file"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              ref="imageInput" 
              @change="handleImageChange"
              id="imageUrl"
            />
              <!-- <p v-if="errors.image">{{ errors.image}}</p> -->
            </div>
            
          <div class="form-group">
            <input
              type="password"
              name="passWord"
              required
              v-model="passWord"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              id="passWord"
              placeholder="Enter Your password"
            />
            <!-- <p v-if="errors.passWord">{{ errors.passWord}}</p> -->
          </div>

          <div class="mx-5">
            <button type="submit" name="submit" id="continue" class="btn btn w-100 mt-2" :disabled="isLoading"> Continue</button>
            <br /><br />
            <p>--------- OR ---------</p>
          </div>
        </form>
        <div class="mx-5">
          <button id="sign" class="btn btn">
            <i class="fa fa-google"></i>Sign up with google
          </button>
          <p class="mt-2">
            Have an account?
            <router-link to="/loginartist" style="color: #a10035" >Sign In</router-link>
            <router-link to="/" class="ml-5" style="color: #a10035" >Go back home</router-link>
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
import BaseUrl from "../BaseUrl";
  
  export default {
    data() {
        return {
            firstName: " ",
            email: " ",
            artistType: " ",
            mobile: "",
            musicType: " ",
            state: "",
            country: "",
            imageUrl:"null",
            passWord: "",
            isLoading: false
          };
    },
    
    methods: {


     handleImageChange (event){
        this.imageUrl = event.target.files[0] ;
    },
        
        onCreatePost() {
          // const info ={
          //   firstName : this.firstName,
          //   email : this.email,
          //   passWord :this.passWord,
          //   artistType : this.artistType,
          //   mobile : this.mobile,
          //   musicType : this.musicType,
          //   state : this.state,
          //   country : this.country,
          //   imageUrl : this.imageUrl,
          //   passWord : this.passWord,
          // }
          // console.log(info);
            const formData = new FormData();
             formData.append("firstName", this.firstName);
             formData.append("email", this.email);
             formData.append("artistType", this.artistType);
             formData.append("mobile", this.mobile);
             formData.append("musicType", this.musicType);
             formData.append("state", this.state);
             formData.append("country", this.country);
             formData.append("imageUrl", this.imageUrl);
             formData.append("passWord", this.passWord);

            //  console.log(formData);
            this.isLoading = true;
            axios
                .post
                    (BaseUrl + "createArtist", formData)
                .then((res) => {
                  const result= res.data.message;    
                    alert(result);
                  if(res.data.status){
                    console.log(res);
                    this.$router.push('/loginartist');
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
  
  