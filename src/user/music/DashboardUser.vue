<template>
    <div class="app">
        <div class="sidebar" :class="{ 'sidebar-open': sidebarOpen }">
            <div class="sidebar-content">
                <img src="../../assets/Camera/Logo.png" height="100" width="100"/>
                
                <ul class="nav" >
                    <li class="nav-item ">
                      <a class="nav-link" href="allmuscians">All</a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="musicartist">Music Artiste</a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="brands">Bands</a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="djs">Djs</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-content">
          <button @click="toggleSidebar" class="toggle-button">
            <i class="fas fa-bars"></i>
          </button>
          

          <!-- <div class="container mt-5 ml-5" style="height: 10em;">
              <div class="row" >
                  <div class="card shadow  rounded col-md-3 mr-4"  v-for="(artist, index) in artists" :key="index">
                <div class="icon">
                    <img :src="artist.imageUrl" alt="card-img-top" class="card-img-top" />
                </div>
                <div class="card_body">
                    <h2 class="card-title"> {{ artist.firstName }}</h2>
                    <p class="card-text">Band</p> 
                    <p>#100,000 avg per price</p>
                    <p>{{ artist.state }}</p>
                </div>
                <span>Check My Profile</span>
            </div>
        </div>
          </div> -->
           
          <div class="container row" style="margin-top: 2em; margin-left: 5em;">
  <section class="my-5 col-md-3 " style="max-width: 23rem;" v-for="(artist, index) in artists" :key="index">
      
    <div class="card shadows testimonial-card mt-2 mb-3" >
      <div class="card-up aqua-gradient"></div>
      <div class="avatar mx-auto white">
        <img :src="artist.imageUrl" class=" img-fluid"  alt="woman avatar">
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
    </div>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    data() {
      return {
        sidebarOpen: false,
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
      toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
      },

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
    },
  };
  </script>
  
  <style scoped>
  .app {
    display: flex;
    /* height: ; */
    overflow:hidden ;
  }
  
  .sidebar {
    width: 0px;
    background-color: #333;
    color: #fff;
    transition: width 0.3s;
    overflow: hidden;
    height: 100vh;
    /* position: fixed; */
  }
  
  .sidebar-open {
    width: 200px;
  }
  
  .toggle-button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    
  }
  
  .sidebar-content {
    padding: 20px;
  }
  
  ul {
    list-style: none;
    margin-top: 3em;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  .main-content {
    
    flex: 1;
    padding: 20px;
    overflow-y: scroll;
  }
  
  @media  (max-width: 677px) {
    .sidebar-open {
    width: 200px;
  }

    }
     @media  (max-width: 1024px) {
      

    }
 
  testimonial-card .card-up {
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
  border-radius: 20%;
}
    </style>
  