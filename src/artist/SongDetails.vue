<template>
    <div class="body">
        <NavArtist/>
        <section>
                <div class="text-light text-center" style="margin-top: 6em;" >
                    <h1>GIVE YOUR FANS MORE</h1>
                    <p>LIVE RECORDINGS MADE SIMPLE</p>
                </div>
        </section>

        <div class="container row" >
            <p class="text-center mt-4 h2">Music Uploaded</p>
            <div class="col-md-5 offset-4 mt-4"  >
                <div   v-for="(user, index) in users" :key="index">
                 <p>{{ index +1 }}.      
                  {{ user.songTitle }} 
                    <button @click="songID(user.id)"  class="btn btn-primary ml-5" data-toggle="modal" data-target="#exampleModal" ><i class="fa fa-info-circle"></i></button> 
                    <button @click="delSong(user.id)"  class="btn btn-danger ml-3"><i class="fas fa-trash"></i></button> 
                  </p>  
                </div>
            </div>
        </div>

<!-- modal -->
<form @submit.prevent="updateUserSong">  
 <div class="modal fade"  id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" >
      <div class="modal-header">
        <h5 class="modal-title mx-auto" >Song Information</h5>
      <!-- <img :src="imageUrl" alt="profile" class="w-25" style="border-radius: 50px;"/> -->
      <img v-if="imageShow" :src="imageShow" alt="profile" class="w-25" style="border-radius: 50px;" />
        <button type="button" data-dismiss="modal" class="close"  aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                <div class="row" >
                     <div class="col-md-6"> 
                        <label>Song Title</label>
                        <input type="hidden" v-model="id" >
                        <input type="text"  class="form-control" v-model="songTitle"  placeholder="Song Title"  required> 
                    </div><br/><br/>
                     <div class="col-md-6"> 
                        <label>Artist Bio</label>
                        <input type="text"  class="form-control" v-model="songDescription"  placeholder="Arist Bio" required> 
                    </div>
                </div>
                 
                 <div class="row mt-3">
                     <div class="col-md-6">
                        <label>Website Url</label>
                         <input type="text"  class="form-control" v-model="websiteUrl" placeholder="Website Url" required> 
                        </div><br/><br/>
                     <div class="col-md-6">
                        <label>Facebook Handle</label>
                         <input type="text"  class="form-control" v-model="facebookHandle"  placeholder="Facebook Handle" required> 
                        </div>
                 </div>
                 
                 <div class="row mt-3">
                     <div class="col-md-6">
                        <label>Tiktok Handle</label>
                         <input type="text"  class="form-control" v-model="tiktokHandle"  placeholder="Tiktok Handle" required> 
                        </div><br/><br/>
                     <div class="col-md-6">
                        <label> Instagram Handle</label>
                        <input type="text"  class="form-control" v-model="instagramHandle"   placeholder="Instagram Handle" required>
                     </div>
                 </div>
                 <div class="row mt-3">
                     <div class="col-md-6 mx-auto">
                        <label> Image</label>
                        <input type="file"  class="form-control"  ref="imageInput" @change="handleImageChange">
                     </div>
                 </div>
             <div class="mt-4 text-center" >
                    <input type="submit" class="btn btn w-25 p-2 text-light" style="background-color: #A10035; "/>
             </div>
      </div>
    </div>
  </div>
</div> 
</form>
<!--  -->




        <div class="body w-100 " id="footer" >
          <FooterArtist/>
        </div>
    </div>    
</template>

<script>
import axios from 'axios';
import BaseUrl from "../BaseUrl.js";
import FooterArtist from './FooterArtist.vue';
import NavArtist from './NavArtist.vue';

export default {
    components: { NavArtist, FooterArtist },
  
    data(){
      return{
        // artist : null,
        users: null,
        id:"",
        ArtistId : "",
        songTitle:"",
        songDescription:"",
        facebookHandle:"",
        imageUrl: null, 
        instagramHandle:"",
        tiktokHandle:"",
        websiteUrl:"",
        image: null,
        imageShow: null

        
        
        
      }
    },
    created(){
        // this.fetchUserProfile();
        this.fetchSong();
      },
    methods:{

      fetchSong(){
        axios.get
                (BaseUrl + "getAllSong")
        // ("http://localhost:8000/getAllSong")
        .then((res)=>{
          console.log(res.data.data);
            this.users = res.data.data
          })
          .catch(err =>{
           console.log(err)
          })
        },
//             async fetchUserProfile() {
//   try {
//     const artistResponse = await axios.get("http://localhost:8000/getArtist");
    
//     if (artistResponse.data.status) {
//       const artistId = artistResponse.data.data.id;
//       console.log("Artist ID:", artistId);
      
//       const songsResponse = await axios.get(`http://localhost:8000/getAllSong/${artistId}`);
      
//       if (songsResponse.data.status) {
//         this.users = songsResponse.data.data;
//         console.log(this.users);
//       } else {
//         console.error("Error fetching songs data:", songsResponse.data.error);
//       } 
//     } else {
//       console.error("Error fetching artist data:", artistResponse.data.error);
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// },

        
        songID(id){
          axios.get
                    (BaseUrl + `songDetail/${id}`)
              // (`http://localhost:8000/songDetail/${id}`)
          .then((res)=>{
              // this.songs = res.data
              // console.log(res.data);
              const songs = res.data
               this.id = songs.id;
               this.songTitle = songs.songTitle;
               this.songDescription = songs.songDescription;
               this.facebookHandle = songs.facebookHandle;
               this.instagramHandle = songs.instagramHandle;
               this.imageUrl = songs.imageUrl;
               this.websiteUrl = songs.websiteUrl;
               this.tiktokHandle = songs.tiktokHandle;
               this.imageShow = songs.imageUrl;

            })
            .catch(err =>{
             console.log(err)
            })
        },

        delSong(id){
          axios.delete
                  (BaseUrl + `delSong/${id}`)
          // (`http://localhost:8000/delSong/${id}`)
          .then((ress)=>{
            const result= ress.data.message;    
               alert(result);
            if(ress.data.status){
              this.users = this.users.filter((user) => user.id !== id);
            }
          })
          .catch(err =>{
            console.log(err);
          })

        },

        handleImageChange(event) {
      this.image = event.target.files[0];
      const file = event.target.files[0];
      this.imageShow = URL.createObjectURL(file);
    },

    updateUserSong() {
      const formData = new FormData();
      formData.append("id", this.id);
      formData.append("songTitle", this.songTitle);
      formData.append("image", this.image);
      formData.append("songDescription", this.songDescription);
      formData.append("websiteUrl", this.websiteUrl);
      formData.append("tiktokHandle", this.tiktokHandle);
      formData.append("facebookHandle", this.facebookHandle);
      formData.append("instagramHandle", this.instagramHandle);

      axios
        .put
            (BaseUrl + `updateSong/${this.id}`, formData)
        // (`http://localhost:8000/updateSong/${this.id}`, formData) 
        .then((ress) => {
          const result= ress.data.message;    
          alert(result);
            if(ress.data.status){
            console.log(ress);
            }
            // this.$router.push("/dashboardartist")
        })
        .catch((error) => {
          console.error(error);
        });
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

    /* Styles for the modal */
.modal {
  display: none;
}


</style>