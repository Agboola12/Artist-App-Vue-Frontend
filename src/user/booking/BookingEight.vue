<template>
    <div class="container "  style="margin-top: 5em;  ">
      <div class="col-sm-5 mx-auto " style="border: 1px solid gray; border-style: none; ">
          <h1 class="mx-5">Booking</h1>
          <hr class="w-50 mx-4"/>
          <div class="mt-4">
              <h4>What is your maximum budget?</h4>
              <input type="text" class="form-control" placeholder="N200,000" /> <br/>
              <button id="btn" class="btn btn text-dark ml-4">Skip &nbsp;&nbsp;&nbsp;&nbsp;
                  <span style="color: #A10035; font-weight: bolder;"> > </span> &nbsp;&nbsp;&nbsp;&nbsp;   Let the musicians send quotes
              </button>
          </div>

          <div class="mt-3 text-center">
              <button class="btn btn text-light  w-25 m-2 ">Back</button>
              <button class="btn btn text-light  w-25 m-2 "><a href="bookingnine">Next</a></button>
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
    background-color: #FECDCD !important;
}
button{
      background-color: #A10035;
  }

</style>