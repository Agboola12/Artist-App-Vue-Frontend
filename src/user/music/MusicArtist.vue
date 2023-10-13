<template>
  <div class="col-sm-6 mx-auto shadow-lg p-3 mb-5 bg-white rounded" id="body">
    <div class="container mt-4 text-dark">
      <h3>
        <i class="fa fa-arrow-alt-circle-left" id="icon"></i>
        Music Artist
      </h3>
      <br />
      <ul class="nav" id="navv">
        <li class="nav-item border mr-5">
            <a class="nav-link mr-3" href="allmuscians">All</a>
          </li>
          <li class="nav-item border mr-5">
            <a class="nav-link mr-3" href="musicartist">Music Artiste</a>
          </li>
          <li class="nav-item border mr-5">
            <a class="nav-link mr-3" href="brands">Bands</a>
          </li>
          <li class="nav-item border mr-5">
            <a class="nav-link mr-3" href="djs">Djs</a>
          </li>
      </ul>
    </div>

    <div class="container mt-5" id="head">
      <div>
        <img src="../assets/Camera/04.jpg" />
      </div>
      <div class="text">
        <h5>Mid night Crew</h5>
        <small class="p">Band</small> <br />
        <small class="p">#100,000 avg per price</small><br />
        <small class="p">Lagos</small>
      </div>
      <div class="ml-auto">
        <i class="fa fa-heart"></i>
      </div>
    </div>
    <hr />

    <div class="container mt-5" id="head">
      <div>
        <img src="../assets/Camera/02.jpg" />
      </div>
      <div class="text">
        <h5>Mid night Crew</h5>
        <small class="p">Band</small> <br />
        <small class="p">#100,000 avg per price</small><br />
        <small class="p">Lagos</small>
      </div>
      <div class="ml-auto">
        <i class="fa fa-heart"></i>
      </div>
    </div>
    <hr />

    <div class="container mt-5" id="head">
      <div>
        <img src="../assets/Camera/04.jpg" />
      </div>
      <div class="text">
        <h5>Mid night Crew</h5>
        <small class="p">Band</small> <br />
        <small class="p">#100,000 avg per price</small><br />
        <small class="p">Lagos</small>
      </div>
      <div class="ml-auto">
        <i class="fa fa-heart"></i>
      </div>
    </div>
    <hr />

    <div class="container mt-5" id="head">
      <div>
        <img src="../assets/Camera/12.jpg" />
      </div>
      <div class="text">
        <h5>Mid night Crew</h5>
        <small class="p">Band</small> <br />
        <small class="p">#100,000 avg per price</small><br />
        <small class="p">Lagos</small>
      </div>
      <div class="ml-auto">
        <i class="fa fa-heart"></i>
      </div>
    </div>
    <hr />

    <div class="container mt-5" id="head">
      <div>
        <img src="../assets/Camera/11.jpg" />
      </div>
      <div class="text">
        <h5>Mid night Crew</h5>
        <small class="p">Band</small> <br />
        <small class="p">#100,000 avg per price</small><br />
        <small class="p">Lagos</small>
      </div>
      <div class="ml-auto">
        <i class="fa fa-heart"></i>
      </div>
    </div>
    <hr />

    <ul class="nav" id="footer">
        <li class="nav-item  mr-3">
            <a class="nav-link mr-3" href="#"><i class="fa fa-home text-center" id="iconn"> <br/>Discover</i></a>
          </li>
          <li class="nav-item mr-3 ">
            <a class="nav-link mr-3"><i class="fa fa-search text-center" id="iconn"><br/>Search </i></a>
          </li>
          <li class="nav-item mr-3 ">
            <a class="nav-link mr-3"> <i class="fa fa-book text-center" id="iconn"><br/>Booking </i></a>
          </li>
          <li class="nav-item mr-3 ">
            <a class="nav-link mr-3"> <i class="fa fa-bell text-center" id="iconn"><br/>Notification </i></a>
          </li>
          <li class="nav-item mr-3 ">
            <a class="nav-link mr-3"> <i class="fa fa-user text-center" id="iconn"><br/>Profile </i></a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 200px;
  height: 150px;
  float: left;
}
.border {
  border-radius: 50px;
}
.nav li a {
  color: black;
}
.navv :hover {
  background-color: #a10035;
  color: white;
  border-radius: 50px;
}

#head {
  display: flex;
}

.text {
  font-size: 20px;
  margin-left: 2em;
}

#iconn:hover{
    color: #a10035;
    font-style: normal;
  }
</style>