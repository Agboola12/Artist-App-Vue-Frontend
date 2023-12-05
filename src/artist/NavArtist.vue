<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-dark fixed-top " id="home" >
<a href="" class="navbar-brand p-3"><img src="images/logo.jpg" style="width:60px;"></a>
<button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="sab">    
<ul class="navbar-nav list-line ml-auto">               
    <li class="nav-item active list-line-item mr-5 ">
      <a href="#home" class="nav-link active text-center text-light">Home</a>
    </li>

    <li class="nav-item dropdown list-line-item mr-5 " >
      <a href="#gallery" class="nav-link text-center text-light">Gallery</a>
    </li>
    <li class="nav-item dropdown  list-line-item mr-5" >
    <a href="#about" class="nav-link text-center text-light" >About</a>
    </li>
    <li class="nav-item dropdown  list-line-item mr-5">
      <a href="#contact" class="nav-link text-center text-light">Contact</a>
    </li>
    <li class="nav-item dropdown  list-line-item mr-5">
      <a href="form.php" class="nav-link text-center text-light">Order</a>
    </li>
    <li class="nav-item dropdown  list-line-item mr-5">
      <a href="Worker/login.php" class="nav-link text-center text-light">Workers</a>
    </li>
    <li class="nav-item dropdown  list-line-item mr-5">
      <a href="Admin/adminlogin.php" class="nav-link text-center text-light">Admin</a>
    </li>
  </ul>

</div>
</nav>




    <nav class="navbar navbar-expand-lg navbar-light border-bottom" style="background-color: white">
      <a class="navbar-brand" id="aa" style="color: #a10035" href="#">Prime</a>        
      <button  class="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNav"  aria-controls="navbarNav"  aria-expanded="false"  aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
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