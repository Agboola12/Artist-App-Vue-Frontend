<template>
    <div class="container "  style="margin-top: 5em;  ">
      <div class="col-sm-6 mx-auto " style="border: 1px solid gray; border-style: none; ">
          <h1 class="ml-5">Booking</h1>
          <hr class="w-50 ml-4"/>
          <div class="mt-5">
              <h4>Would you like to recieve quotes from similar musicians?</h4>
              <p> Your inquiry will also be sent to similar musicians. </p>
          </div>

          <div class="row">
            <div class="col-md-6">
                <button class="btn btn text-light  w-75 ">Yes, please</button>
            </div>
            <div class="col-md-6">
                <button  id="btn" class="btn btn text-dark w-75  ">No, thanks</button>
            </div>
          </div>

          <div class="mt-5 ml-3">
              <button class="btn btn text-light  w-25 m-1 ">Back</button>
              <button class="btn btn text-light  w-25 m-1 "><a href="booking">Next</a></button>
          </div>
       </div> 
       </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#btn{
    background-color:#FECDCD !important;
}

button{
      background-color: #A10035;
  }

</style>