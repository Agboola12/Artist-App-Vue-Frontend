<template>
    <div class="container shadow p-3  bg-white rounded"  style="margin-top: 5em; width: 80%;">
        <a href="homeuser" style="margin-left: 90%;"><button class="btn btn-danger  ">Go Back Home</button></a>
      <div class="col-sm-5 mx-auto " style="border: 1px solid gray; border-style: none; ">
          <h1 class="ml-5">Booking</h1>
          <hr class="w-50 ml-4"/>
          <div class="mt-4">
              <h4>What type of wedding will this event be?</h4>
              <select name="wedding" class="form-control" id="wedding">
                        <option value="band">Wedding reception</option>
                        <option value="afro-beat">Church Concert</option>
                        <option value="juju">Carnival</option>
                    </select>
          </div>

          <div class="mt-3 text-center">
              <button class="btn btn text-light  w-25 m-2 ">Back</button>
              <button class="btn btn text-light  w-25 m-2 "><a href="bookingeight">Next</a></button>
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
  }

</style>