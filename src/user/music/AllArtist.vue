<template>
    <UserSideBar/>
    <div class="main-content">
        <div class="container">
            <div class="row">
                  <div class="col-md-3">

                  </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserSideBar from '../UserSideBar.vue'
export default {
    components: { UserSideBar },


    data() {
        return {
            id: "",
            artists: null,
        };
    },
    // getting all the artist
    getAllArtist() {
                axios.get("http://localhost:8000/getAllArtist")
                    .then((res) => {
                    console.log(res.data);
                    this.artists = res.data;
                });
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