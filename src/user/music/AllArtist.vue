<template>
    <UserSideBar/>
    <div class="main-content">
        <div class="container">
            <div class="row mt-3">
                <h2 class="text-center">All Musicians</h2>
                  <div class="col-md-3 mt-4 mb-2" v-for="(artist, index) in artists" :key="index">
                    <img class="card-img-top w-100" :src="artist.imageUrl" alt="Card image" height="200" >
                    <div class="card-body">
                         <h4 class="card-title">{{ artist.firstName }}</h4>
                         <p class="card-text">Band</p>
                         <p class="card-text">{{ artist.state}}, {{ artist.country }}</p>
                       <button  class="border-0 btn btn-danger" @click="artistProfile(artist.id)">Check Profile</button> 
                     </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import UserSideBar from '../UserSideBar.vue'
export default {
    components: { UserSideBar },

    data() {
        return {
            artists: null,
        };
    },
    created() {
        this.getAllArtist();
    },
    methods: {
      
        // getting all the artist
        getAllArtist() {
            axios.get("http://localhost:8000/getAllArtist")
                .then((res) => {
                console.log(res.data);
                this.artists = res.data;
            });
        },

        artistProfile(id){
                    axios.post("http://localhost:8000/getArtistDetails", id) 
                .then((res) => {
                    console.log(res.data);
                    this.$router.push("/artistprofile");
            });

            // this.$router.push('/artistprofile/'+id)
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