<template>
  <div class="body">
    <NavArtist />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 text-center" id="picture" v-if="user">
          <!-- <img src="../assets/Camera/02.jpg"  /> -->
      <img :src="user.imageUrl" alt="profile" class="w-100"/>
          <div class="mt-3">
            <h4 class="text-danger">{{ user.firstName }}</h4>
            <!-- <h4 class="text-danger">{{ user.id }}</h4> -->
          </div>
        </div>

        <div class="col-md-8 mx-auto" id="profile">
          <ul class="nav nav- mx-auto col-6 mt-3" id="sidebar">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#home"
                >Dashboard</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#menu1">Profile</a>
            </li>
          </ul>

          <div class="tab-content">
            <div id="home" class="container tab-pane active mb-4">
              <br /><br />
              <h3 class="ml-5 fw-bold">Dashboard</h3>
              <div class="card shadow p-5 mt-4">
                <div class="row" id="offset">
                  <div class="col-md-3 offset-1">
                    <h4>Audios</h4>
                    <p class="ml-4">5</p>
                  </div>
                  <div class="col-md-3 offset-1">
                    <h4>Vidoes</h4>
                    <p class="ml-4">2</p>
                  </div>
                  <div class="col-md-3 offset-1">
                    <h4>Likes</h4>
                    <p class="ml-2">500</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="menu1" class="container tab-pane fade">
              <br />
              <ProfileArtist  />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body w-100 " id="footer" >
      <FooterArtist/>
    </div>
  </div>
</template>

<script>
import ProfileArtist from "./ProfileArtist.vue";
import NavArtist from "./NavArtist.vue"
import FooterArtist from "./FooterArtist.vue";
import axios from 'axios';

export default {
  components: { ProfileArtist, NavArtist, FooterArtist },

  data() {
    return {
      
      user: null,
    }
  },
  created() {  
      this.fetchUserProfile();
    
  },
  methods: {

    fetchUserProfile() {
      axios.get("http://localhost:8000/getArtist" )
        .then((res) => {
            console.log(res.data);
          this.user = res.data.data;
        
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }
};
</script>

<style scoped>
.body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.card {
  border-radius: 10px;
}
nav #aa {
  color: black;
  font-size: larger;
  margin-left: 10em;
}

#navbarNav ul li a {
  color: black;
}
#picture {
  height: 89vh;
  background-color: #f8f8fd;
  min-width: auto;
  min-height: auto;
}
#picture img {
  margin-top: 9em;
  border-radius: 20px;
}
#profile {
  background-color: #f8f8fd;
}
#sidebar li a {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: grey;
}

#sidebar :hover {
  background-color: #fddbdb;
  color: #a10035;
  border-radius: 5px;
}

#offset h4 {
  font-weight: bolder;
}
#offset p {
  font-weight: bolder;
  color: grey;
}
#footer{
  height: 35vh;
}

</style>