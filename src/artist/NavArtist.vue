<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light border-bottom" style="background-color: white">
      <a class="navbar-brand" id="aa" style="color: #a10035" href="#">Prime</a>        
      <button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="sab">
        <ul class="navbar-nav list-line mx-auto">               
          <li class="nav-item active">
            <router-link to="/dashboardartist" class="nav-link">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mymusic" class="nav-link">Upload</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/songdetails" class="nav-link">Songs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/artistnotification" class="nav-link">Notification</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/artistappointment" class="nav-link">Appointment</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/loginartist" class="nav-link" @click="logOut()">LogOut</router-link>
          </li>
          
        </ul>
        
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    logOut(){
      localStorage.removeItem("token");
    navigate("loginartist", { replace: true })

    }
  }

}
</script>

<style>

</style>