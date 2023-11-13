<template>
        <div class="body">
            <header class="shadow-sm" style="border-radius: 20px;" >
                <nav class="navbar navbar-expand-lg navbar-light">
                    <h4 class="navbar-brand" href="#" style="color: #FFDDDD; font-size: 2em;"><b>Prime</b></h4>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav" style="margin-left: 70%;">
                        <li class="nav-item active">
                          <a class="nav-link  text-light" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-light" href="#">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-light" href="register">User</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-light" href="registerartist">Artist</a>
                        </li>
                      </ul>
                </div>
                </nav>

                <div class="row">
                    <div class="col-md-6 text-center ml-5 " style="margin-top: 8em;">
                        <h1 style="font-weight: bolder; font-size: 3em;">YOU CALL IT </h1> 
                          <h1 style="font-weight: bolder;">MUSIC </h1> 
                            <h3 style="font-weight: bolder; font-size: 2em;"> I CALL IT MY THERAPIST </h3>
                    </div>
                    <div class="image col-md-5">
                        <img src="../src/assets/Camera/background.png" height="500px"  />
                    </div>
                </div>
              </header>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 4em;
  background-size: cover;
  background-attachment: fixed;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  overflow: hidden;
  height: auto;
  width: 100%;
  background: white;
}

header{
  background: linear-gradient(#A10035, #FFDDDD);
  background-size: cover;
  background-attachment: fixed;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
}

.image:hover{
  transform: scale(1.1);
  transition: all 2s;

}
</style>