<template>
    <div class="body">
        <NavArtist/>
        <div class="container ">
            <div class="row " >
                    <div class="col-md-3 p-4 mt-5 mx-auto card-client" v-for="(user, index) in users" :key="index" >
                        <div class="user-picture">
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                    </svg>
                </div>
                <p class="name-client"> 
                    {{ user.userName }}
                    <span class="mt-2">{{ user.userEmail }}</span>
                    <span class="mt-3" @click="infoDetails(user.id)"><a href="" class="details">Details</a></span>
                </p>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import axios from "axios";
import NavArtist from "./NavArtist.vue";
import BaseUrl from "../BaseUrl.js";


export default {
    data() {
        return {
            id: '',
            artistName: "",
            users: null,
        };
    },
    created() {
        this.fetchUserProfile();
    },
    methods: {
        fetchUserProfile() {
            axios.get
            (BaseUrl+"getArtist")
                .then((res) => {
                        // console.log(res.data.data.id)
                    this.id = res.data.data.id;
                  this.artistName = res.data.data.firstName
                
                
            axios.get
            (BaseUrl + `artistNotice/${this.id}`)
            // (`http://localhost:8000/artistNotice/${this.id}`)
                .then((res) => {
                console.log(res.data.user);
                this.users = res.data.user
            })
                .catch((error) => {
                console.error(error);
            });

        })
                .catch((error) => {
                console.error(error);
            });
        },

        infoDetails(id){
            axios.get(BaseUrl + `infoDetails/${id}`)
            .then((res)=>{
                console.log(res)
            })
            .catch((error)=>{
                console.log(error);
            })

        },

        
    },
    components: { NavArtist }
}
</script>

<style scoped>
.body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card-client {
  /* margin-left: 10em;   */
  background: #A10035;
  width: 25rem;
  height: 15em;
  /* padding-top: 20px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px; */
  border: 4px solid #A10035;
  box-shadow: 0 6px 10px #A10035;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}

.card-client:hover {
  transform: translateY(-10px);
}

.details{
    color: #fddbdb;
}

.user-picture {
  overflow: hidden;
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  border: 4px solid #fddbdb;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.user-picture svg {
  width: 2.5rem;
  fill: currentColor;
}

.name-client {
  margin: 0;
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
}

.name-client span {
  display: block;
  font-weight: 200;
  font-size: 16px;
}



</style>