<template>
    <div class="container "  style="margin-top: 5em;  ">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>
        <div class="col-sm-4" style="margin-left: 30%;" >
            <h1 class="ml-5">Booking</h1>
            <hr class="w-50 ml-4"/>
            <div class="mt-5">
                <h5>What type of musician are you looking for?</h5>
                    <select name="cars" class="form-control" id="cars">
                        <option value="band">Music Band</option>
                        <option value="artiste">Artiste</option>>
                    </select>
            </div>

            <div class="mt-5">
                <h5>What style musician would you like?</h5>
                <select name="cars" class="form-control" id="cars">
                        <option value="band">Band</option>
                        <option value="afro-beat">Afro Beat</option>
                        <option value="juju">Juju</option>
                        <option value="gospel">Gospel</option>
                    </select>
            </div>

            <div class="dropdown show">
  <p class=" form-control dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </p>

  <div class="dropdown-menu form-control" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

            <div class="mt-3 text-center">
                <button class="btn btn text-light  w-25 m-1 ">Back</button>
                <a href="bookingthree"><button class="btn btn text-light  w-25 m-1 ">Next</button></a>
            </div>
         </div>   

    </div>
</template>

<script>

export default {

}
</script>

<style scoped>

        button{
            background-color: #A10035;
            color: white;
        }
</style>