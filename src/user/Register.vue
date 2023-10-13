<template>
  <div class="container" align="center" style="margin-top: 5em">
    <div class="col-sm-5" style="border: 1px solid gray; border-style: none">
      <h2 class="text-center">Create an account</h2>
      <br />
      <form action="post" enctype="multipart/form-data" @submit.prevent="onCreatePost">
        <div class="form-group form-floating">
          <input
            type="text"
            name="fname"
            v-model="fname"
            class="form-control fa fa-user border-right-0 shadow-none border-top-0 border-left-0"
            id="fname"
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
          <input
            type="file"
            @change="onFileChange"
            class="form-control border-right-0 shadow-none border-top-0 border-left-0"
            ref="file"
          />
        </div>
        
        <div class="form-group">
          <input
            type="password"
            name="password"
            v-model="password"
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
          Have an account? <a href="#" style="color: #a10035">Sign In</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Cloudinary } from "@cloudinary/url-gen";
// import Cloudinary from "@cloudinary/url-gen"
// import Cloudinary from "@cloudinary/vue"


export default {
  data() {
    return {
      fname: " ",
      email: " ",
      password: "",
      type: "signUp",
      cloudinaryUrl: "https://api.cloudinary.com/v1_1/dbzwg4li4/upload",
      cloudinaryPresetUpload: "y4bs18oz",
      files:'',
      fileUrl:''
    };
  },
  methods: {
    uploadCloudinary(formData){
      axios
      .post(
        this.cloudinaryUrl, formData )
      .then((res) => {
        console.log(res);
        this.fileUrl = res.data.secure_url
      })
      .catch((err) => {
        console.log(err);
      });
    },

    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      
      this.files = files[0]
      const formData = new FormData();    
      formData.append("file", this.files);
      formData.append("folder", "Music");
      formData.append("upload_preset", this.cloudinaryPresetUpload);
      formData.append("resource_type", "raw");
      this.uploadCloudinary(formData)
    },
    createImage (file) {
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = file.toString('base64')
        console.log(vm.image)
      }
      reader.readAsDataURL(file)
    },

    onCreatePost() {
      
      // const formData = new FormData();
      // formData.append("fname", this.fname);
      // formData.append("email", this.email);
      // formData.append("userImg", this.fileUrl);
      // formData.append("password", this.password);
      // formData.append("type", this.type);

      const info ={
        fname : this.fname,
        email : this.email,
        userImg : this.fileUrl,
        password :this.password,
        type: this.type
      }
     console.log(info);

      axios
        .post(
          "http://localhost/Vue-Php-Project/Php-Backend/config.php", info )
        .then((res) => {
          // console.log(res);
                    this.$router.push('/login')
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

