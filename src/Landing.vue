<template>
    <div>
        <header>
      <div class="text-center" id="first">
        <h1 class="text-light">Welcome to Prime</h1>
        <a href="registerartist">Artist</a><br/>
        <a href="register">User</a>
          <p class="m-4 text-light" >
            Easily book musicians for your wedding and browse a range of solo performers and full bands
          
          </p>	
          <button style="backgroundColor: rgb(161,0,53);" class="btn mx-auto text-white p-3">Set up account</button>
          <!-- <button class="btn btn-success"><a href="" class="nav-link h5" style="color: white">Enjoy Our Services</a></button> -->
      </div>
</header>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

header {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),url(../assets/download.jfif);
    background-size: cover;
    background-attachment: fixed;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    }

    #first{
        margin-top: 8em;
    }

</style>