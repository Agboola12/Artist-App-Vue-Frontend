<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light border-bottom"
      style="background-color: white"
    >
      <a class="navbar-brand" id="aa" style="color: #a10035" href="#">Prime</a>

        <!-- <button class="btn btn-outline-danger" >Welcome Mr Artist</button> -->
        
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav fs-4" style="margin-left: 30%; ">
          <li class="nav-item active">
            <a class="nav-link" href="dashboardartist">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mymusic">Upload</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="songdetails">Songs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="artistnotification">Notification</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="artistappointment">Appointment</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="loginartist" @click="logOut()">Logout</a>
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