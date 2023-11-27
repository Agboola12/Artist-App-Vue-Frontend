<template>
    <div class="container  shadow p-4" align="center" style="margin-top: 2em">
      <div class="col-sm-5" style="border: 1px solid gray; border-style: none">
        <h2 class="text-center">Create an account</h2>
        <br />
        <form action="post" enctype="multipart/form-data" @submit.prevent="onCreatePost">
          <div class="form-group form-floating">
            <input
              type="text"
              name="fname"
              v-model="firstName"
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
              @change="onFileChange"
              class="form-control border-right-0 shadow-none border-top-0 border-left-0"
              ref="file"
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
  import { Cloudinary } from "@cloudinary/url-gen";
import FooterArtist from "./FooterArtist.vue";
  
  
  export default {
    data() {
        return {
            firstName: " ",
            email: " ",
            passWord: "",
            mobile: "",
            state: "",
            country: "",
            cloudinaryUrl: "https://api.cloudinary.com/v1_1/dbzwg4li4/upload",
            cloudinaryPresetUpload: "y4bs18oz",
            files: '',
            fileUrl: ''
        };
    },
    methods: {
        uploadCloudinary(formData) {
            axios
                .post(this.cloudinaryUrl, formData)
                .then((res) => {
                console.log(res);
                this.fileUrl = res.data.secure_url;
            })
                .catch((err) => {
                console.log(err);
            });
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }
            this.files = files[0];
            const formData = new FormData();
            formData.append("file", this.files);
            formData.append("folder", "Music");
            formData.append("upload_preset", this.cloudinaryPresetUpload);
            formData.append("resource_type", "raw");
            this.uploadCloudinary(formData);
        },
        createImage(file) {
            var reader = new FileReader();
            var vm = this;
            reader.onload = (e) => {
                vm.image = file.toString('base64');
                console.log(vm.image);
            };
            reader.readAsDataURL(file);
        },
        onCreatePost() {

            const info = {
                firstName: this.firstName,
                email: this.email,
                artistImage: this.fileUrl,
                mobile: this.mobile,
                state: this.state,
                country: this.country,
                passWord: this.passWord,
            };
            // console.log(info);
            axios
                .post("http://localhost:8000/createArtist", info)
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

<!-- const express = require('express');
const cors = require('cors');
const sequelize = require('./database/connection');
const User = require('./models/User');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

sequelize.sync();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

app.post('/submit-form', async (req, res) => {
  try {
    const { firstName, email, mobile } = req.body;
    const newUser = await User.create({ firstName, email, mobile });

    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Form Submission Confirmation',
      text: `Thank you for submitting the form, ${firstName}!`,
    });

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); -->

  
  