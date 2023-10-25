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
          
          <div class="container">

              <div class="row w-100">
                  <div class="card col-md-4 m-2 " v-for="(artist, index) in artists" :key="index">
                <div class="icon">
                    <img :src="artist.imageUrl" alt="profile" class="w-100" height="100" width="100"/>
                </div>
                <div class="card_body">
                    <h2> {{ artist.firstName }}</h2>
                    <p>Band</p> 
                    <p>#100,000 avg per price</p>
                    <p>{{ artist.state }}</p>
                </div>
                <span>Check My Profile</span>
            </div>
            
        </div>
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
    height: 100vh;
    overflow: hidden;
  }
  
  .sidebar {
    width: 0px;
    background-color: #333;
    color: #fff;
    transition: width 0.3s;
    overflow: hidden;
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
    /* padding: 0; */
    /* margin: 0; */
    margin-top: 3em;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
    /* background-color: #f0f0f0; */
  }

  .card {
  --bg: #f7f7f8;
  --hover-bg: #FFE5F4;
  --hover-text: #E50087;
  /* max-width: 23ch; */
  text-align: center;
  background: var(--bg);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.card__body {
  color: #464853;
  line-height: 1.5em;
  font-size: 1em;
}

.card > :not(span) {
  transition: .3s cubic-bezier(.6,.4,0,1);
}

.card > strong {
  display: block;
  font-size: 1.4rem;
  letter-spacing: -.035em;
}

.card span {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-text);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
}

.card:hover span {
  top: 0;
  font-size: 1.2em;
}

.card:hover {
  background: var(--hover-bg);
}

.card:hover>div,.card:hover>strong {
  opacity: 0;
}
    </style>
  