<template>
        <div class="body p-5">
            <header>

              <nav class="navbar navbar-expand-lg navbar-light bg-light p-2 " style="color: #001d47" >
                    <h4 class="navbar-brand" href="#" style="color: #A10035;">Prime</h4>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    
    <ul class="navbar-nav  mx-auto text-center" id="navbar">
        <li class="nav-item mx-auto">
            <a class="nav-link  text-dark text-center"  href="#" routerLink="home">Home</a>
        </li>
     
     <li class="nav-item">
        <a class="nav-link text-dark"  href="#" routerLink="/user-home">Account</a>
    </li>
  
        <!-- <li class="nav-item dropdown">
            <a class="nav-link  text-dark"     >Account</a>
        </li> -->
  
      <li class="nav-item">
        <a class="nav-link text-dark"  href="#" routerLink="/contact">Contact</a>
    </li>
     <li class="nav-item">
        <a class="nav-link text-dark"  href="#" routerLink="/findabranch">Find a branch</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-dark"  href="#" routerLink="/partner">Sponsorship</a>
    </li>
    <li class="nav-item">
            <a class="nav-link  text-dark"  href="#" routerLink="/question">Question</a>
        </li>
    </ul>
  </div>
  </nav>
                <nav class=" shadow navbar navbar-expand-lg navbar-light bg-light">
                    <h4 class="navbar-brand" href="#" style="color: #A10035;">Prime</h4>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link" href="#">Home </a>
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
  height: 100vh;
  width: 100%;
    
}
</style>