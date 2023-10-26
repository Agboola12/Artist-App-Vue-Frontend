<template>
<button class="btn btn-primary toggle-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
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

      <div class="main-content">
        <div class="container row" v-for="(artist, index) in artists" :key="index" >
        <section class=" my-5 col-md-3" style="max-width: 23rem;">
          <div class="card testimonial-card mt-2 mb-3">
            <div class="card-up aqua-gradient"></div>
            <div class="avatar mx-auto white">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" class="rounded-circle img-fluid"
                alt="woman avatar">
            </div>
            <div class="card-body text-center">
              <h4 class="card-title font-weight-bold">Martha Smith</h4>
              <hr>
              <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                adipisci</p>
            </div>
          </div>
        </section>
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
body {
	background-color: #f5f7fa;
}

.testimonial-card .card-up {
  height: 120px;
  overflow: hidden;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.aqua-gradient {
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
}

.testimonial-card .avatar {
  width: 120px;
  margin-top: -60px;
  overflow: hidden;
  border: 5px solid #fff;
  border-radius: 50%;
}
</style>