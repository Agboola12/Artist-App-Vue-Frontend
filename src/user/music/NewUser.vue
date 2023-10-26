<template>
<button class="btn btn toggle-button m-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  <i class="fas fa-bars"></i>
</button>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
    <p>hjsdbjk</p>
  </div>
</div>
        <div class="row">
          <div class="col-md-3 " v-for="(artist, index) in artists" :key="index" >
            
      </div>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        user: null,
        id: "",
        artists: null,
      };
    },
    created() {
      this.getUser();
      this.getAllArtist();
      this.id = this.$route.params.id;
    },
    methods: {
      getUser() {
        axios.get("http://localhost:8000/getUser")
          .then((res) => {
            // console.log(res.data);
            this.user = res.data.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },

      getAllArtist(){
        axios.get("http://localhost:8000/getAllArtist")
        .then((res)=>{
          console.log(res.data);
          this.artists = res.data;

        })
      }
    }
  }
</script>
<style scoped>



</style>