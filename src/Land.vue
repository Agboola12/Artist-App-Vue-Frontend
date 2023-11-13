<template>
        <div class="body p-5">
            <header class="shadow">
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <h4 class="navbar-brand" href="#" style="color: #A10035;">Prime</h4>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav" style="margin-left: 70%;">
                        <li class="nav-item active">
                          <a class="nav-link " href="#">Home </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link disabled">Disabled</a>
                        </li>
                      </ul>
                </div>
                </nav>

                <div class="row">
                    <div class="col-md-4">
                        <h3>Vibe to the song</h3>
                        <p>Enjoy the music.</p>
                    </div>
                    <div class="image col-md-6">

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
  background: linear-gradient(#A10035, #FFDDDD);
  /* background-color:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)) #A10035; */
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),url(../assets/download.jfif); */
  background-size: cover;
  background-attachment: fixed;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  overflow: hidden;
  height: auto;
  width: 100%;
}

header{
  background: white;
  background-size: cover;
  background-attachment: fixed;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  

}
</style>