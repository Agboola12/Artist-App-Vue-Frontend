<template>
    <UserSideBar/>
    <div class="main-content">
        <div class="container">
            <div v-if="artists.length>0">
            <div class="row mt-3">
                <h2 class="text-center">All Musicians</h2>
                    <div class="col-md-3 mt-4 mb-2" v-for="(artist, index) in artists" :key="index">
                        <img class="card-img-top w-100" :src="artist.imageUrl" alt="Card image" height="200" >
                        <div class="card-body">
                            <h4 class="card-title">{{ artist.firstName }}</h4>
                            <p class="card-text">Band</p>
                            <p class="card-text">{{ artist.state}}, {{ artist.country }}</p>
                            <button  class="border-0 btn btn-danger" @click="Artistprofile(artist.id)">Check Profile</button> 
                        </div>
                    </div>
                </div>
            </div>
        <div v-else>
                <p>Artist is yet to signUp</p>
        </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import UserSideBar from '../UserSideBar.vue'
import BaseUrl from "../../BaseUrl.js"

export default {
    components: { UserSideBar },

    data() {
        return {
            artists: [],
        };
    },
    created() {
        this.getAllArtist();
    },
    methods: {
      
        // getting all the artist
        getAllArtist() {
            axios.get
                    (BaseUrl + "getAllArtist")
            // ("http://localhost:8000/getAllArtist")
                .then((res) => {
                console.log(res.data);
                this.artists = res.data;
            });
        },

        Artistprofile(id){
            this.$router.push('/artistprofile/'+id)
        }

    },
        


}
</script>
<style scoped>
.main-content{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: auto;
  overflow-x: visible;
}
</style>