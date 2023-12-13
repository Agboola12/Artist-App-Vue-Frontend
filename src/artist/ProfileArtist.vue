<template>
      <div class="mt-5 pb-5 "  v-if="user" >


        
        <!-- <div class="col-md-8  " > -->
            <table class="table table-borderless " style="font-size: 18px;">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{{user.firstName}}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td> {{user.email}}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td> {{user.state}}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td> {{user.country}}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td> {{user.mobile}}</td>
                      </tr>
                      <br />
                    </tbody>
                  </table>
                  <button class='btn btn-success' data-toggle="modal" data-target="#exampleModal">Edit Profile</button>
                </div>
                   
              <!-- </div> -->
                <div v-else>
                  <p>Please log in to access your profile.</p>
                </div>  
               
<form @submit.prevent="updateUserProfile">
                <div class="modal fade"  id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" >
      <div class="modal-header">
        <h5 class="modal-title mx-auto" >Edit Profile</h5>
      <!-- <img :src="avatarFile" alt="profile" class="w-25" style="border-radius: 50px;"/> -->
      <img v-if="imageShow" :src="imageShow" alt="profile" class="w-25" style="border-radius: 50px;" />
        <button type="button" data-dismiss="modal" class="close"  aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                <div class="row" >
                  <div class="col-md-6">
                     <input type="hidden" v-model="id" >
                    <input type="text" v-model="firstName"  class="form-control" required> </div><br/><br/>
                   <div class="col-md-6"> <input type="text" v-model="email"  class="form-control"  required> </div>
                </div>
               
               <div class="row mt-3">
                   <div class="col-md-6"> <input type="text" v-model="state"  class="form-control" placeholder="State" required> </div><br/><br/>
                   <div class="col-md-6"> <input type="text" v-model="country" class="form-control" placeholder="Country" required> </div>
               </div>
               
               <div class="row mt-3">
                   <div class="col-md-6"> <input type="text" v-model="mobile" class="form-control" placeholder="Mobile Number" required> </div>
                   <div class="col-md-6">  <input type="file" ref="imageInput" @change="handleImageChange" class="form-control" /></div>
               </div>
           <div class="mt-4" style="margin-left: 10em;">
                  <input type="submit"  class="btn btn  w-75 p-2 text-light" value="Update Profile" :disabled="isLoading" style="background-color: #A10035; "/>
           </div>
          </div>
    </div>
  </div>
</div>   
</form>  
    

    
</template>

<script>
import axios from 'axios';
import BaseUrl from "../BaseUrl.js";

export default {
  data() {
    return {
      
      user: null,
      id : "",
      firstName: "",
      email: "",
      state: "",
      country:"",
      mobile:"",
      image: null,
      imageShow:  null,
      avatarFile: null,
      isLoading : false
    }
  },
  created() {  
      this.fetchUserProfile();
      this.id = this.$route.params.id;
    
  },
  methods: {

    fetchUserProfile() {
      axios.get
      (BaseUrl + "getArtist")
        .then((res) => {
            // console.log(res.data);
          this.user = res.data.data
          const userData = res.data.data
          this.id = userData.id;
          this.firstName = userData.firstName;
          this.email = userData.email;
          this.state = userData.state;
          this.country = userData.country;
          this.mobile = userData.mobile;
          this.imageShow = userData.imageUrl;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    
    handleImageChange(event) {
      this.image = event.target.files[0];
      const file = event.target.files[0];
      this.imageShow = URL.createObjectURL(file);
    },

    updateUserProfile() {
      const formData = new FormData();
      formData.append("id", this.id);
      formData.append("firstName", this.firstName);
      formData.append("mobile", this.mobile);
      formData.append("email", this.email);
      formData.append("state", this.state);
      formData.append("country", this.country);
      formData.append("image", this.image);
      

      this.isLoading = true
      axios
        .put
            (BaseUrl + `updateProfile/${this.id}`, formData)
        .then((ress) => {
          const result= ress.data.message;    
          alert(result);
          if(ress.data.status){
            // console.log(ress);
            this.$router.push("/dashboardartist")
          }
        })
        .catch((error) => {
          console.error(error);
        }).finally(()=>{
            this.isLoading = false;
          })
    },
  },


}
</script>

<style>

</style>