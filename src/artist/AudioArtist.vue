<template>
  <div class="body">
        <NavArtist/>
        <section>
                <div class="text-light text-center" style="margin-top: 6em;" >
                    <h1>GIVE YOUR FANS MORE</h1>
                    <p>LIVE RECORDINGS MADE SIMPLE</p>
                </div>
        </section>
        <div class="boddd ">
            <div class="container">
                <h2 class="pt-5">Add New Artist</h2>
                <div class="mt-5">
                    <form action="post" method="post" enctype="multipart/form-data" @submit.prevent="onCreate">
                    <div class="form-group row">
                        <label class="col-md-2 fw-bold">Song Title:</label>
                        <input type="text" class="form-control col-md-2 " placeholder="Enter your song title" v-model="songTitle"  required>     
                    </div>
                    <div class="form-group row mt-4">
                        <label class="col-md-2 fw-bold">Song Image:</label>
                        <div class="col-md-3 show-image">
                            <!-- <h3 class="text-center mt-4">Show Image Upload</h3> -->
                            <img v-if="imageShow" :src="imageShow" height="200" width="150" />
                        </div>
                        <div class=" form-group col-md-3 border  ml-2">
                            <label for="file-upload" class="custom-file-upload btn btn">Select Image
                                <input id="file-upload"  type="file"  @change="handleImageChange"  />
                            </label>
                        </div>
                        <div class=" form-group row mt-4">
                            <label class="col-md-2 fw-bold">Mp3:</label>
                            <input type="file"  ref="mp3" @change="handleMp3Change" class="col-md-4"  >
                        </div>
                        <div class=" form-group row mt-4">
                            <label class="col-md-2 fw-bold">Song Bio:</label>
                            <textarea placeholder="Add your a description of you and your music" v-model="songDescription" class="col-md-4"  rows="5">
                            </textarea>
                        </div>
                        <div class="form-group row mt-4">
                            <label class="col-md-2 fw-bold">Website Url:</label>
                            <input type="text" class="form-control col-md-2" v-model="websiteUrl" placeholder="Enter your website address" required>     
                        </div>
                        <div class="form-group row mt-4">
                            <label class="col-md-2 fw-bold">Facebook Handle:</label>
                            <input type="text" class="form-control col-md-2" v-model="facebookHandle" placeholder="Enter your facebook username" required>     
                        </div>
                        <div class="form-group row mt-4">
                            <label class="col-md-2 fw-bold">Tiktok Handle:</label>
                            <input type="text" class="form-control col-md-2" v-model="tiktokHandle" placeholder="Enter your tiktok username" required>     
                        </div>
                        <div class="form-group row mt-4">
                            <label class="col-md-2 fw-bold">Instagram Handle:</label>
                            <input type="text" class="form-control col-md-2" v-model="instagramHandle" placeholder="Enter your instagram username" required>     
                        </div>
                    </div>          
                    <div class="mt-4 pb-5" style="margin-left: 13em; ">
                           <input type="submit" value="" class="btn btn ml-5  w-50 p-2 text-light" style="background-color: #A10035;"/>
                    </div>
                </form>
                 </div>
            </div>
        </div>
        <div class="body w-100 " id="footer" >
          <FooterArtist/>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import FooterArtist from './FooterArtist.vue';
import NavArtist from './NavArtist.vue';

export default {
    components: { FooterArtist, NavArtist },

    data(){
        return{
            user: null,
            songTitle: "",
            songDescription: "",
            websiteUrl:"",
            tiktokHandle:"",
            facebookHandle:"",
            instagramHandle: "",
            imageFile: null,
            mp3File: null,
            imageShow: null
        }
    },
    created() {  
        this.fetchUserProfile();
        
    },
    methods:{

        fetchUserProfile() {
      axios.get("http://localhost:8000/getArtist" )
        .then((res) => {
          this.user = res.data.data.id
        })
        .catch((error) => {
          console.error(error);
        });
    },
    
    handleImageChange(event) {
        const file = event.target.files[0];
      this.imageShow = URL.createObjectURL(file);
      this.imageFile = event.target.files[0];
    },


    handleMp3Change(e) {
    this.mp3File = e.target.files[0]
    },

    onCreate(){
        const artistId = this.user;
        const formData = new FormData();
        formData.append("songTitle", this.songTitle);
        formData.append('image', this.imageFile);
        formData.append('mp3', this.mp3File);
        formData.append("songDescription", this.songDescription);
        formData.append("websiteUrl", this.websiteUrl);
        formData.append("tiktokHandle", this.tiktokHandle);
        formData.append("facebookHandle", this.facebookHandle);
        formData.append("instagramHandle", this.instagramHandle);
        formData.append("artistId", artistId);

            axios.post("http://localhost:8000/createMusic",  formData)
            .then(res =>{
                this.$router.push("/songdetails");
            })
            .catch(err =>{
                console.log(err);
            })
        }, 

    }
}
</script>

<style scoped>
    .body {
     font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
    section{
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url('../assets/Camera/monkey.jpg');
        background-size: cover;
        background-attachment: fixed;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        overflow: hidden;
        height: 50vh;
    }
    .boddd{
        background-color: #F8F8FD;
        width: 100%;
        height: auto;
        
    }

    .custom-file-upload input[type="file"] {
    display: none;
} 

.custom-file-upload {
        margin-top: 4em;
        border: 1px solid #A10035;
}

.border{
    height: 10em;
    width: 11em;
    background-color: #E7E7F3;
}
 .show-image{
    background-color: #E7E7F3;
    height: 13em;
    width: 11em;
} 

.form-control{
    width: 23em;
}
</style>